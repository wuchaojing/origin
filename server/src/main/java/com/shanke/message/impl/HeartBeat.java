package com.shanke.message.impl;

import com.shanke.info.JvmInfo;
import com.shanke.info.MemoryInfo;
import com.shanke.info.SystemInfo;
import com.shanke.message.Message;
import lombok.Data;
import lombok.EqualsAndHashCode;


@EqualsAndHashCode(callSuper = true)
@Data
public class HeartBeat extends Message {

    private String domain;
    private String hostname;
    private String ipAddress;

    private SystemInfo systemInfo;
    private MemoryInfo memoryInfo;
    private JvmInfo jvmInfo;

    public HeartBeat(String domain, String hostname, String ipAddress) {
        this.domain = domain;
        this.hostname = hostname;
        this.ipAddress = ipAddress;
    }
}
