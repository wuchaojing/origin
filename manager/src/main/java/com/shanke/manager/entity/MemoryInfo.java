package com.shanke.manager.entity;

import lombok.Data;

@Data
public class MemoryInfo {

    private long time;
    private long usedMemory;
    private long maxMemory;
    private long usedOldGen;
    private long maxOldGen;
    private long usedPermGen;
    private long maxPermGen;
    private long usedEdenSpace;
    private long maxEdenSpace;
    private long usedSurvivorSpace;
    private long maxSurvivorSpace;
    private long usedMetaSpace;
    private long maxMetaSpace;
    private long usedNonHeapMemory;
    private long maxNonHeapMemory;

    public MemoryInfo() {}
}
