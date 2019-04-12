package com.shanke.message;

import lombok.Data;

@Data
public class Message {
    private String messageType;
    private HeartBeat heartBeat;
    private Transaction transaction;

    public Message() {
    }
}
