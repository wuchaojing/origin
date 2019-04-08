package com.shanke.manager.impl;

import com.shanke.info.JvmInfo;
import com.shanke.info.MemoryInfo;
import com.shanke.info.SystemInfo;
import com.shanke.manager.Manager;
import com.shanke.message.Message;
import com.shanke.message.impl.HeartBeat;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class HeartBeatManager extends Manager {

    public HeartBeatManager() {
        ExecutorService executorService = Executors.newSingleThreadExecutor();
        Thread thread = new Thread(new Collector());
        thread.setDaemon(true);
        executorService.submit(thread);
    }

    class Collector implements Runnable {

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

                Message message = new Message("heartBeat");
                message.setHeartBeat(heartBeat);
                heartBeatQueue.offer(message);
                waitMinute();
            }
        }
    }
}
