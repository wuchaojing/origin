package com.shanke.manager.impl;

import com.shanke.manager.Manager;
import com.shanke.message.impl.Transaction;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class TransactionManager extends Manager {

    private String hostname;
    private String domain;
    private String ipAddress;

    private static TransactionManager instance = new TransactionManager();

    private ThreadLocal<Context> contexts = new ThreadLocal<>();

    public TransactionManager() {
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
        return instance;
    }

    public void addTransaction(Transaction transaction) {
        Context context = getContext();
        context.addTransaction(transaction);
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

    class Context {

        private Transaction transaction;

        public Context(String domain, String hostname, String ipAddress) {
            transaction.setDomain(domain);
            transaction.setHostName(hostname);
            transaction.setIpAddress(ipAddress);

            Thread currentThread = Thread.currentThread();
            transaction.setThreadName(currentThread.getName());
            transaction.setThreadId(String.valueOf(currentThread.getId()));
            transaction.setThreadGroupName(currentThread.getThreadGroup().toString());

        }

        public void addTransaction(Transaction transaction) {

            this.transaction.setType(transaction.getType());
            this.transaction.setName(transaction.getName());
            transactionQueue.add(this.transaction);
        }

        public void setTransaction(Transaction transaction) {
            this.transaction = transaction;
        }
    }


}
