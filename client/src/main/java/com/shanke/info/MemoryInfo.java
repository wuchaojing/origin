package com.shanke.info;

import lombok.Data;

import java.lang.management.ManagementFactory;
import java.lang.management.MemoryPoolMXBean;
import java.lang.management.MemoryUsage;

@Data
public class MemoryInfo {

    private final long usedMemory;
    private final long maxMemory;
    private final long usedOldGen;
    private final long maxOldGen;
    private final long usedPermGen;
    private final long maxPermGen;
    private final long usedEdenSpace;
    private final long maxEdenSpace;
    private final long usedSurvivorSpace;
    private final long maxSurvivorSpace;
    private final long usedMetaSpace;
    private final long maxMetaSpace;
    private final long usedNonHeapMemory;
    private final long maxNonHeapMemory;

    public MemoryInfo() {
        usedMemory = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
        maxMemory = Runtime.getRuntime().maxMemory();
        final MemoryPoolMXBean permGenMemoryPool = getPermGenMemoryPool();

        if (permGenMemoryPool != null) {
            final MemoryUsage usage = permGenMemoryPool.getUsage();
            usedPermGen = usage.getUsed();
            maxPermGen = usage.getMax();
        } else {
            usedPermGen = 0;
            maxPermGen = 0;
        }

        final MemoryPoolMXBean metaSpaceMemoryPool = getMetaspaceMemoryPool();

        if (metaSpaceMemoryPool != null) {
            final MemoryUsage usage = metaSpaceMemoryPool.getUsage();
            usedMetaSpace = usage.getUsed();
            maxMetaSpace = usage.getMax();
        } else {
            usedMetaSpace = 0;
            maxMetaSpace = 0;
        }

        final MemoryPoolMXBean oldGenMemoryPool = getOldGenMemoryPool();
        if (oldGenMemoryPool != null) {
            final MemoryUsage usage = oldGenMemoryPool.getUsage();
            usedOldGen = usage.getUsed();
            maxOldGen = usage.getMax();
        } else {
            usedOldGen = 0;
            maxOldGen = 0;
        }

        final MemoryPoolMXBean edenSpaceMemoryPool = getEdenSpacePool();
        if (edenSpaceMemoryPool != null) {
            final MemoryUsage usage = edenSpaceMemoryPool.getUsage();
            usedEdenSpace = usage.getUsed();
            maxEdenSpace = usage.getMax();
        } else {
            usedEdenSpace = 0;
            maxEdenSpace = 0;
        }

        final MemoryPoolMXBean survivorSpacePool = getSurvivorSpaceMemoryPool();
        if (survivorSpacePool != null) {
            final MemoryUsage usage = survivorSpacePool.getUsage();
            usedSurvivorSpace = usage.getUsed();
            maxSurvivorSpace = usage.getMax();
        } else {
            usedSurvivorSpace = 0;
            maxSurvivorSpace = 0;
        }

        final MemoryUsage nonHeapMemoryUsage = ManagementFactory.getMemoryMXBean().getNonHeapMemoryUsage();

        usedNonHeapMemory = nonHeapMemoryUsage.getUsed();
        maxNonHeapMemory = nonHeapMemoryUsage.getMax();
    }

    private MemoryPoolMXBean getEdenSpacePool() {
        for (final MemoryPoolMXBean memoryPool : ManagementFactory.getMemoryPoolMXBeans()) {
            if (memoryPool.getName().endsWith("Eden Space")) {
                return memoryPool;
            }
        }
        return null;
    }

    private MemoryPoolMXBean getMetaspaceMemoryPool() {
        for (final MemoryPoolMXBean memoryPool : ManagementFactory.getMemoryPoolMXBeans()) {
            if (memoryPool.getName().endsWith("Metaspace")) {
                return memoryPool;
            }
        }
        return null;
    }

    private MemoryPoolMXBean getOldGenMemoryPool() {
        for (final MemoryPoolMXBean memoryPool : ManagementFactory.getMemoryPoolMXBeans()) {
            if (memoryPool.getName().endsWith("Old Gen")) {
                return memoryPool;
            }
        }
        return null;
    }

    private MemoryPoolMXBean getPermGenMemoryPool() {
        for (final MemoryPoolMXBean memoryPool : ManagementFactory.getMemoryPoolMXBeans()) {
            if (memoryPool.getName().endsWith("Perm Gen")) {
                return memoryPool;
            }
        }
        return null;
    }

    private MemoryPoolMXBean getSurvivorSpaceMemoryPool() {
        for (final MemoryPoolMXBean memoryPool : ManagementFactory.getMemoryPoolMXBeans()) {
            if (memoryPool.getName().endsWith("Survivor Space")) {
                return memoryPool;
            }
        }
        return null;
    }
}
