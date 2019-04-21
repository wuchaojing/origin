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

        App.newTransaction("URL", "world");
        Thread.sleep(1000);
        App.endTransaction();

        return "hello";
    }

    @RequestMapping("/sql")
    @ResponseBody
    public String world() throws InterruptedException {

        App.newTransaction("SQL", "jing");
        Thread.sleep(1000);
        App.endTransaction();

        return "hello";
    }

    @RequestMapping("/a")
    @ResponseBody
    public String aaa() throws InterruptedException {

        App.newTransaction("AAA", "jing");
        Thread.sleep(1000);
        App.endTransaction();

        return "hello";
    }

    @RequestMapping("/thread")
    @ResponseBody
    public String thread() throws InterruptedException {

        App.newTransaction("Thread", "jing");
        Thread.sleep(1000);
        App.endTransaction();

        return "hello";
    }

}
