package com.shanke.sender;

import com.shanke.message.Message;
import com.shanke.netty.Client;

public class MessageSender {

    private static MessageSender instance = new MessageSender();

    public static MessageSender getInstance() {
        return instance;
    }

    public void send(Message message) {
        Client client = new Client();
        try {
            client.start(message);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }
}
