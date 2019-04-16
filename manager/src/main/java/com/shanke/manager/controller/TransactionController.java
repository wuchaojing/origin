package com.shanke.manager.controller;

import com.shanke.manager.entity.Params;
import com.shanke.manager.entity.TransactionCount;
import com.shanke.manager.response.ResultInfo;
import com.shanke.manager.service.TransactionService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.List;

@Controller
public class TransactionController {

    @Resource
    private TransactionService transactionService;

    @GetMapping(value = {"/index", "/transaction"})
    public String enterIndex(Model model) {
        String domain = "com.test";
        Long time = System.currentTimeMillis() - System.currentTimeMillis() % 3600000;
        List<String> machines = transactionService.getMachines(domain);
        List<TransactionCount> transactionCounts = transactionService.enterIndex(domain, time);
        model.addAttribute("machines", machines);
        model.addAttribute("transactionCounts", transactionCounts);
        return "transaction";

    }

    @GetMapping("/get_type")
    public String getType(Model model, Params params) {
        String domain = params.getDomain();

        Timestamp ts = Timestamp.valueOf(params.getStartTime() + ":00");
        Long startTime = ts.getTime();

        ts = Timestamp.valueOf(params.getEndTime() + ":00");
        Long endTime = ts.getTime();

        String machine = params.getMachine() == null ? "all" : params.getMachine();

        List<String> machines = transactionService.getMachines(domain);

        List<TransactionCount> transactionCounts = transactionService.getType(domain, machine, startTime, endTime);

        params.setEndTime(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(endTime));

        model.addAttribute("machines", machines);
        model.addAttribute("transactionCounts", transactionCounts);
        return "transaction";
    }

    @GetMapping("/show")
    @ResponseBody
    public ResultInfo show(Params params) {
        String domain = params.getDomain();

        Timestamp ts = Timestamp.valueOf(params.getStartTime() + ":00");
        Long startTime = ts.getTime();

        ts = Timestamp.valueOf(params.getEndTime() + ":00");
        Long endTime = ts.getTime();

        String machine = params.getMachine() == null ? "all" : params.getMachine();

        String type = params.getType();

        List<TransactionCount> transactionCounts = transactionService.getDetailWithType(domain, machine, type, startTime, endTime);

        return new ResultInfo(0, transactionCounts);
    }

    @GetMapping(value = {"/type"})
    public String type(Model model) {
        String name = "jiangbei";
        model.addAttribute("name", name);
        return "type";
    }

}
