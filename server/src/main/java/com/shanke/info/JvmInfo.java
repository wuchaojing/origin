package com.shanke.info;

import lombok.Data;

import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;
import java.util.LinkedHashSet;
import java.util.Set;

@Data
public class JvmInfo {

    private long lastGcCount;
    private long lastGcTime;
    private long lastFullGcTime;
    private long lastFullGcCount;
    private long lastYoungGcTime;
    private long lastYoungGcCount;

    private long gcCount;
    private long gcTime;
    private long oldGCount;
    private long oldGcTime;
    private long youngGcCount;
    private long youngGcTime;

    private Set<String> youngGcAlgorithm = new LinkedHashSet<String>() {
        private static final long serialVersionUID = -2953196532584721351L;

        {
            add("Copy");
            add("ParNew");
            add("PS Scavenge");
            add("G1 Young Generation");
        }
    };

    private Set<String> oldGcAlgorithm = new LinkedHashSet<String>() {
        private static final long serialVersionUID = -8267829533109860610L;

        {
            add("MarkSweepCompact");
            add("PS MarkSweep");
            add("ConcurrentMarkSweep");
            add("G1 Old Generation");
        }
    };

    public JvmInfo() {

        for (final GarbageCollectorMXBean garbageCollector : ManagementFactory.getGarbageCollectorMXBeans()) {
            gcTime += garbageCollector.getCollectionTime();
            gcCount += garbageCollector.getCollectionCount();
            String gcAlgorithm = garbageCollector.getName();

            if (youngGcAlgorithm.contains(gcAlgorithm)) {
                youngGcTime += garbageCollector.getCollectionTime();
                youngGcCount += garbageCollector.getCollectionCount();
            } else if (oldGcAlgorithm.contains(gcAlgorithm)) {
                oldGcTime += garbageCollector.getCollectionTime();
                oldGCount += garbageCollector.getCollectionCount();
            }
        }

        gcCount = gcCount - lastGcCount;
        gcTime = gcTime - lastGcTime;
        oldGCount = oldGCount - lastFullGcCount;

        oldGcTime = oldGcTime - lastFullGcTime;
        youngGcCount = youngGcCount - lastYoungGcCount;
        youngGcTime = youngGcTime - lastYoungGcTime;

        lastGcCount = gcCount;
        lastGcTime = gcTime;
        lastYoungGcCount = youngGcCount;
        lastYoungGcTime = youngGcTime;
        lastFullGcCount = oldGCount;
        lastFullGcTime = oldGcTime;
    }

}
