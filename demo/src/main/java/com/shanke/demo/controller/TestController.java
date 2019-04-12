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

        App.newTransaction("a", "b");
        Thread.sleep(2000);
//        App.endTransaction();

        return "hello";
    }

}
