package com.shanke.info;

import lombok.Data;

import java.lang.management.ManagementFactory;

@Data
public class SystemInfo {

    private String loadAverage;
    private String totalPhysicMemory;
    private String usedPhysicMemory;
    private String totalSwapSpace;
    private String usedSwapSpace;

    public SystemInfo() {
        java.lang.management.OperatingSystemMXBean operatingSystem = ManagementFactory.getOperatingSystemMXBean();

        loadAverage = String.valueOf(operatingSystem.getSystemLoadAverage());

        com.sun.management.OperatingSystemMXBean osBean = (com.sun.management.OperatingSystemMXBean) operatingSystem;
        totalPhysicMemory = String.valueOf(osBean.getTotalPhysicalMemorySize() / 1024 / 1024);
        totalSwapSpace = String.valueOf(osBean.getTotalSwapSpaceSize() / 1024 / 1024);
        usedPhysicMemory = String.valueOf(osBean.getTotalPhysicalMemorySize() - osBean.getFreePhysicalMemorySize() / 1024 / 1024);
        usedSwapSpace = String.valueOf(osBean.getTotalSwapSpaceSize() - osBean.getFreeSwapSpaceSize() / 1024 / 1024);
    }
}
