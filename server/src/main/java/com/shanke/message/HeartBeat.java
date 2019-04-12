package com.shanke.message;

import com.shanke.info.JvmInfo;
import com.shanke.info.MemoryInfo;
import com.shanke.info.SystemInfo;
import lombok.Data;


@Data
public class HeartBeat {

    private String domain;
    private String hostname;
    private String ipAddress;
    private Long time;

    private SystemInfo systemInfo;
    private MemoryInfo memoryInfo;
    private JvmInfo jvmInfo;

    public HeartBeat(String domain, String hostname, String ipAddress) {
        this.domain = domain;
        this.hostname = hostname;
        this.ipAddress = ipAddress;
    }

    public HeartBeat() {
    }
}
