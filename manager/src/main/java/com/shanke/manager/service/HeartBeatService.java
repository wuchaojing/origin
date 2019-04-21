package com.shanke.manager.service;

import com.shanke.manager.entity.JvmInfo;
import com.shanke.manager.entity.MemoryInfo;
import com.shanke.manager.entity.SystemInfo;
import com.shanke.manager.mapper.JvmMapper;
import com.shanke.manager.mapper.MemoryMapper;
import com.shanke.manager.mapper.SystemMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class HeartBeatService {

    @Resource
    private SystemMapper systemMapper;

    @Resource
    private JvmMapper jvmMapper;

    @Resource
    private MemoryMapper memoryMapper;

    public List<SystemInfo> getSystemInfo(String domain, String hostname, Long startTime, Long endTime) {
        return systemMapper.select(domain, hostname, startTime, endTime);
    }

    public List<JvmInfo> getJvmInfo(String domain, String hostname, Long startTime, Long endTime) {
        return jvmMapper.select(domain, hostname, startTime, endTime);
    }

    public List<MemoryInfo> getMemoryInfo(String domain, String hostname, Long startTime, Long endTime) {
        return memoryMapper.select(domain, hostname, startTime, endTime);
    }
}
