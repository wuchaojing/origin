package com.shanke.message;

import lombok.Data;

@Data
public class Message {
    private String messageType;
    private Transaction transaction;
    private HeartBeat heartBeat;

    public Message() {
    }
}
