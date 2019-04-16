package com.shanke.manager.controller;

import com.shanke.manager.service.TransactionService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.annotation.Resource;
import java.util.List;

@Controller
public class HeartBeatController {

    @Resource
    private TransactionService transactionService;

    @GetMapping(value = {"/heart"})
    public String heart(Model model, String domain) {
        List<String> machines = transactionService.getMachines("com.test");
        model.addAttribute("machines",machines);
        return "heartBeat";

    }


}
