package com.shanke.manager.entity;

import lombok.Data;

@Data
public class SystemInfo {

    private long time;
    private String loadAverage;
    private String totalPhysicMemory;
    private String usedPhysicMemory;
    private String totalSwapSpace;
    private String usedSwapSpace;

    public SystemInfo(){}

    public SystemInfo(String loadAverage) {
        this.loadAverage = loadAverage;
    }
}
