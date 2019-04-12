package com.shanke.manager;

import com.shanke.info.JvmInfo;
import com.shanke.info.MemoryInfo;
import com.shanke.info.SystemInfo;
import com.shanke.message.HeartBeat;
import com.shanke.message.Message;
import com.shanke.sender.MessageSender;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.concurrent.BlockingDeque;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingDeque;

public class HeartBeatManager {

    private static BlockingDeque<Message> heartBeatQueue = new LinkedBlockingDeque<>();

    private static ExecutorService executorService = Executors.newFixedThreadPool(2);

    public HeartBeatManager() {

//        Thread senderThread = new Thread(new Sender());
//        senderThread.setDaemon(true);
//        executorService.submit(senderThread);
        new Thread(new Sender()).start();

        new Thread(new Collector()).start();
//
//        Thread collectorThread = new Thread(new Collector());
//        senderThread.setDaemon(true);
//        executorService.submit(collectorThread);
    }

    class Sender implements Runnable {

        private MessageSender messageSender = MessageSender.getInstance();

        @Override
        public void run() {
            while (true) {
                try {
                    Thread.sleep(10000);
                } catch (InterruptedException e) {


                }
                System.out.println("------------");
                Message message = heartBeatQueue.poll();
                if (message != null) {
                    messageSender.send(message);
                }
            }
        }
    }

    class Collector implements Runnable {

        private void waitMinute() {
            try {
                Thread.sleep(10000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void run() {
            while (true) {
                System.out.println("==========");
                String domain = "com.test";
                String ipAddress = null;
                String hostname = null;
                InetAddress addr;
                try {
                    addr = InetAddress.getLocalHost();
                    ipAddress = addr.getHostAddress();
                    hostname = addr.getHostName();
                } catch (UnknownHostException e) {
                    e.printStackTrace();
                }

                JvmInfo jvmInfo = new JvmInfo();
                MemoryInfo memoryInfo = new MemoryInfo();
                SystemInfo systemInfo = new SystemInfo();

                HeartBeat heartBeat = new HeartBeat(domain, hostname, ipAddress);
                heartBeat.setJvmInfo(jvmInfo);
                heartBeat.setMemoryInfo(memoryInfo);
                heartBeat.setSystemInfo(systemInfo);
                heartBeat.setTime(System.currentTimeMillis());

                Message message = new Message();
                message.setMessageType("heartBeat");
                message.setHeartBeat(heartBeat);
                heartBeatQueue.offer(message);
                waitMinute();
            }
        }
    }
}
