package com.shanke.message;

import com.shanke.message.impl.HeartBeat;
import com.shanke.message.impl.Transaction;
import lombok.Data;

@Data
public class Message {
    private String type;
    private HeartBeat heartBeat;
    private Transaction transaction;

    public Message(String type) {
        this.type = type;
    }

    public Message() {
    }
}
