package com.shanke.manager.controller;

import com.shanke.manager.entity.JvmInfo;
import com.shanke.manager.entity.MemoryInfo;
import com.shanke.manager.entity.Params;
import com.shanke.manager.entity.SystemInfo;
import com.shanke.manager.service.HeartBeatService;
import com.shanke.manager.service.TransactionService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class HeartBeatController {

    @Resource
    private TransactionService transactionService;

    @Resource
    private HeartBeatService heartBeatService;

    @GetMapping(value = {"/heart"})
    public String heart(Model model, Params params) {
        String domain = params.getDomain();
        if (StringUtils.isEmpty(domain)) {
            domain = "monitor";
        }
        List<String> machines = transactionService.getMachines(domain);
        if (machines.size() == 0) {
            return "heartBeat";
        }
        model.addAttribute("machines", machines);
        Long startTime = System.currentTimeMillis() - System.currentTimeMillis() % 3600000;
        Long endTime = startTime + 3600000;

        if (params.getStartTime() != null) {
            Timestamp ts = Timestamp.valueOf(params.getStartTime() + ":00");
            startTime = ts.getTime();

            ts = Timestamp.valueOf(params.getEndTime() + ":00");
            endTime = ts.getTime();
        }

        String machine = params.getMachine() == null ? machines.get(0) : params.getMachine();

        List<SystemInfo> systemInfos = heartBeatService.getSystemInfo(domain, machine, startTime, endTime);

        List<JvmInfo> jvmInfos = heartBeatService.getJvmInfo(domain, machine, startTime, endTime);

        List<MemoryInfo> memoryInfos = heartBeatService.getMemoryInfo(domain, machine, startTime, endTime);

        Map<Integer, SystemInfo> systemMap = new HashMap<>();
        Map<Integer, JvmInfo> jvmMap = new HashMap<>();
        Map<Integer, MemoryInfo> memoryMap = new HashMap<>();

        for (SystemInfo systemInfo : systemInfos) {
            systemMap.put(new Date(systemInfo.getTime()).getMinutes(), systemInfo);
        }

        for (JvmInfo jvmInfo : jvmInfos) {
            jvmMap.put(new Date(jvmInfo.getTime()).getMinutes(), jvmInfo);
        }

        for (MemoryInfo memoryInfo : memoryInfos) {
            memoryMap.put(new Date(memoryInfo.getTime()).getMinutes(), memoryInfo);
        }

        model.addAttribute("systemMap", systemMap);
        model.addAttribute("jvmMap", jvmMap);
        model.addAttribute("memoryMap", memoryMap);

        return "heartBeat";

    }

}
