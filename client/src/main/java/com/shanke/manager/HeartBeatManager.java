package com.shanke.manager;

import com.shanke.info.JvmInfo;
import com.shanke.info.MemoryInfo;
import com.shanke.info.SystemInfo;
import com.shanke.message.HeartBeat;
import com.shanke.message.Message;
import com.shanke.sender.MessageSender;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Properties;
import java.util.concurrent.BlockingDeque;
import java.util.concurrent.LinkedBlockingDeque;

public class HeartBeatManager {

    private static BlockingDeque<Message> heartBeatQueue = new LinkedBlockingDeque<>();

    public HeartBeatManager() {

        new Thread(new Sender()).start();

        new Thread(new Collector()).start();
    }

    class Sender implements Runnable {

        private MessageSender messageSender = MessageSender.getInstance();

        @Override
        public void run() {
            while (true) {
                Message message = null;
                try {
                    message = heartBeatQueue.take();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                if (message != null) {
                    messageSender.send(message);
                }
            }
        }
    }

    class Collector implements Runnable {

        private Properties properties;

        {
            properties = new Properties();
            try {
                properties.load(this.getClass().getResourceAsStream("/app.properties"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        private void waitMinute() {
            try {
                Thread.sleep(60000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void run() {
            while (true) {
                String domain = properties.getProperty("app.name");
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
