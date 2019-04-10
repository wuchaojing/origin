package com.shanke.info;

import java.lang.management.ManagementFactory;
import java.lang.management.MemoryPoolMXBean;
import java.lang.management.MemoryUsage;

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
    private long usedCodeCache;
    private long maxCodeCache;

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

        final MemoryPoolMXBean codeCacheMemoryPool = getCodeCacheMemoryPool();
        if (codeCacheMemoryPool != null) {
            final MemoryUsage usage = codeCacheMemoryPool.getUsage();
            usedCodeCache = usage.getUsed();
            maxCodeCache = usage.getMax();
        } else {
            usedCodeCache = 0;
            maxCodeCache = 0;
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

    private MemoryPoolMXBean getCodeCacheMemoryPool() {
        for (final MemoryPoolMXBean memoryPool : ManagementFactory.getMemoryPoolMXBeans()) {
            if (memoryPool.getName().endsWith("Code Cache")) {
                return memoryPool;
            }
        }
        return null;
    }

    private MemoryPoolMXBean getEdenSpacePool() {
        for (final MemoryPoolMXBean memoryPool : ManagementFactory.getMemoryPoolMXBeans()) {
            if (memoryPool.getName().endsWith("Eden Space")) {
                return memoryPool;
            }
        }
        return null;
    }

    public long getMaxEdenSpace() {
        return maxEdenSpace;
    }

    public long getMaxMemory() {
        return maxMemory;
    }

    public long getMaxNonHeapMemory() {
        return maxNonHeapMemory;
    }

    public long getMaxOldGen() {
        return maxOldGen;
    }

    public long getMaxPermGen() {
        return maxPermGen;
    }

    public long getMaxSurvivorSpace() {
        return maxSurvivorSpace;
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

    public long getUsedCodeCache() {
        return usedCodeCache;
    }

    public double getUsedCodeCachePercentage() {
        if (usedCodeCache > 0 && maxCodeCache > 0) {
            return 100d * usedCodeCache / maxCodeCache;
        }
        return 0d;
    }

    public long getUsedEdenSpace() {
        return usedEdenSpace;
    }

    public double getUsedEdenSpacePercentage() {
        if (usedEdenSpace > 0 && maxEdenSpace > 0) {
            return 100d * usedEdenSpace / maxEdenSpace;
        }
        return 0d;
    }

    public long getUsedMemory() {
        return usedMemory;
    }

    public double getUsedMemoryPercentage() {
        return 100d * usedMemory / maxMemory;
    }

    public long getUsedMetaSpace() {
        return usedMetaSpace;
    }

    public double getUsedMetaSpacePercentage() {
        if (usedMetaSpace > 0 && maxMetaSpace > 0) {
            return 100d * usedMetaSpace / maxMetaSpace;
        }
        return 0d;
    }

    public long getUsedNonHeapMemory() {
        return usedNonHeapMemory;
    }

    public double getUsedNonHeapPercentage() {
        if (usedNonHeapMemory > 0 && maxNonHeapMemory > 0) {
            return 100d * usedNonHeapMemory / maxNonHeapMemory;
        }
        return 0d;
    }

    public long getUsedOldGen() {
        return usedOldGen;
    }

    public double getUsedOldGenPercentage() {
        if (usedOldGen > 0 && maxOldGen > 0) {
            return 100d * usedOldGen / maxOldGen;
        }
        return 0d;
    }

    public long getUsedPermGen() {
        return usedPermGen;
    }

    public double getUsedPermGenPercentage() {
        if (usedPermGen > 0 && maxPermGen > 0) {
            return 100d * usedPermGen / maxPermGen;
        }
        return 0d;
    }

    public long getUsedSurvivorSpace() {
        return usedSurvivorSpace;
    }

    public double getUsedSurvivorSpacePercentage() {
        if (usedSurvivorSpace > 0 && maxSurvivorSpace > 0) {
            return 100d * usedSurvivorSpace / maxSurvivorSpace;
        }
        return 0d;
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "[usedMemory=" + getUsedMemory() + ", maxMemroy=" + getMaxMemory() + ']';
    }

}
