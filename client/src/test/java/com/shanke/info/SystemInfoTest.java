package com.shanke.info;

import org.junit.Test;

public class SystemInfoTest {

    @Test
    public void testSystem() {
        SystemInfo systemInfo = new SystemInfo();
        System.out.println(systemInfo.getLoadAverage());
        System.out.println(systemInfo.getTotalPhysicMemory());

    }
}
