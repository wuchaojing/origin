package com.shanke.manager;

import org.junit.Test;

public class ManagerTest {

    @Test
    public void testManager() {
        new HeartBeatManager();
        try {
            Thread.sleep(100000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
