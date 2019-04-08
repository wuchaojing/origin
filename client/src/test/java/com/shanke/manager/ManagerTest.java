package com.shanke.manager;

import com.shanke.manager.impl.HeartBeatManager;
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
