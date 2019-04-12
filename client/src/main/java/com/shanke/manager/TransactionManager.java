package com.shanke.manager;

import com.shanke.message.Message;
import com.shanke.message.Transaction;
import com.shanke.sender.MessageSender;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.concurrent.BlockingDeque;
import java.util.concurrent.LinkedBlockingDeque;

public class TransactionManager{

    private BlockingDeque<Message> transactionQueue = new LinkedBlockingDeque<>();

    private String hostname;
    private String domain;
    private String ipAddress;

    private static MessageSender sender = MessageSender.getInstance();

    private ThreadLocal<Context> contexts = new ThreadLocal<>();

    private TransactionManager() {
        domain = "com.test";
        InetAddress addr;
        try {
            addr = InetAddress.getLocalHost();
            this.ipAddress = addr.getHostAddress();
            this.hostname = addr.getHostName();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
    }

    public static TransactionManager getInstance() {
        return new TransactionManager();
    }

    public void addTransaction(Transaction transaction) {
        Context context = getContext();
        context.addTransaction(transaction);
    }

    public void endTransaction() {
        Context context = getContext();
        context.endTransaction();
    }

    private Context getContext() {
        Context context = contexts.get();
        if (context != null) {
            return context;
        }
        context = new Context(domain, hostname, ipAddress);

        contexts.set(context);

        return context;
    }

    private class Context {

        private Transaction transaction;

        private Context(String domain, String hostname, String ipAddress) {
            transaction = new Transaction();
            transaction.setDomain(domain);
            transaction.setHostName(hostname);
            transaction.setIpAddress(ipAddress);

            Thread currentThread = Thread.currentThread();
            transaction.setThreadName(currentThread.getName());
            transaction.setThreadId(String.valueOf(currentThread.getId()));
            transaction.setThreadGroupName(currentThread.getThreadGroup().toString());

        }

        private void addTransaction(Transaction transaction) {
            this.transaction.setName(transaction.getName());
            this.transaction.setType(transaction.getType());
            this.transaction.setStartTime(System.currentTimeMillis());
            Message message = new Message();
            message.setMessageType("transaction");
            message.setTransaction(this.transaction);
            transactionQueue.add(message);
        }

        // 单开线程，保证服务正常结束
        private void endTransaction() {
            new Thread(() -> {
                Message message;
                try {
                    message = transactionQueue.take();
                    message.getTransaction().setDurationTime(System.currentTimeMillis() - transaction.getStartTime());
                    sender.send(message);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }
}
