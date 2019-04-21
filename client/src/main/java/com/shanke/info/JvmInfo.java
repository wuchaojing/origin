package com.shanke.info;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;
import java.util.LinkedHashSet;
import java.util.Set;

@Data
public class JvmInfo {

    private long gcCount;
    private long gcTime;
    private long oldGcCount;
    private long oldGcTime;
    private long youngGcCount;
    private long youngGcTime;

    @JsonIgnore
    private Set<String> youngGcAlgorithm = new LinkedHashSet<String>() {
        private static final long serialVersionUID = -2953196532584721351L;

        {
            add("Copy");
            add("ParNew");
            add("PS Scavenge");
            add("G1 Young Generation");
        }
    };

    @JsonIgnore
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
                oldGcCount += garbageCollector.getCollectionCount();
            }
        }

    }
}
