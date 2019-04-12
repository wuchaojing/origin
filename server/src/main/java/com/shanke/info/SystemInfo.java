package com.shanke.info;

import lombok.Data;

@Data
public class SystemInfo {

    private String loadAverage;
    private String totalPhysicMemory;
    private String usedPhysicMemory;
    private String totalSwapSpace;
    private String usedSwapSpace;

    public SystemInfo(){}
}
