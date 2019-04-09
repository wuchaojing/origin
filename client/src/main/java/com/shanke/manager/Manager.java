package com.shanke.manager;

import com.shanke.manager.impl.HeartBeatManager;
import com.shanke.message.Message;
import com.shanke.sender.MessageSender;

import java.util.concurrent.BlockingDeque;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingDeque;

public class Manager {

    protected BlockingDeque<Message> transactionQueue = new LinkedBlockingDeque<>();
    protected BlockingDeque<Message> heartBeatQueue = new LinkedBlockingDeque<>();

    private MessageSender sender = MessageSender.getInstance();

    public Manager() {
        ExecutorService executorService = Executors.newSingleThreadExecutor();
        Thread thread = new Thread(new Sender());
        thread.setDaemon(true);
        executorService.execute(thread);
    }

    class Sender implements Runnable {

        private void waitMinute() {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void run() {

            while (true) {
                Message message = null;
                try {
                    message = heartBeatQueue.take();
                    sender.send(message);
                    waitMinute();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }

        }
    }


}
