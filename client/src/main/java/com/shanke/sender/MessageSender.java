package com.shanke.sender;

import com.shanke.message.Message;

public class MessageSender {

    private static MessageSender instance = new MessageSender();

    public static MessageSender getInstance() {
        return instance;
    }

    public void send(Message message) {
        System.out.println(message);

    }
}
