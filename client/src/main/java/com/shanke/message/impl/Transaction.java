package com.shanke.message.impl;

import com.shanke.message.Message;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class Transaction extends Message {

    private String type;
    private String name;

    private String domain;
    private String hostName;
    private String ipAddress;

    private String threadId;
    private String threadName;
    private String threadGroupName;

    private String durationTime;

    public Transaction(String type, String name) {
        this.type = type;
        this.name = name;
    }

}
