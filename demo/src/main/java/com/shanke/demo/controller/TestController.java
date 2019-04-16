package com.shanke.demo.controller;

import com.shanke.App;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @RequestMapping("/hello")
    @ResponseBody
    public String hello() throws InterruptedException {

        App.newTransaction("hello", "world");
        Thread.sleep(1000);
        App.endTransaction();

        return "hello";
    }

    @RequestMapping("/world")
    @ResponseBody
    public String world() throws InterruptedException {

        App.newTransaction("chao", "jing");
        Thread.sleep(1000);
        App.endTransaction();

        return "hello";
    }

}
