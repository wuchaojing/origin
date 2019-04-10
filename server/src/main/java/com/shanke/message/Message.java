package com.shanke.message;

import com.shanke.message.impl.HeartBeat;
import com.shanke.message.impl.Transaction;
import lombok.Data;

@Data
public class Message {
    private String messageType;
    private HeartBeat heartBeat;
    private Transaction transaction;

    public Message(String messageType) {
        this.messageType = messageType;
    }

    public Message() {
    }
}
