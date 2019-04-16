package com.shanke.manager.entity;

import lombok.Data;

@Data
public class Transaction {

    private String type;
    private String name;

    private String domain;
    private String hostName;
    private String ipAddress;

    private String threadId;
    private String threadName;
    private String threadGroupName;
    private Long startTime;

    private Long durationTime;

    public Transaction(String type, String name) {
        this.type = type;
        this.name = name;
    }

    public Transaction() {
    }

}
