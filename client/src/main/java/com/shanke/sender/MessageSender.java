package com.shanke.sender;

import com.shanke.message.Message;
import com.shanke.netty.Client;
import com.shanke.utils.JsonUtil;

public class MessageSender {

    private static MessageSender instance = new MessageSender();

    public static MessageSender getInstance() {
        return instance;
    }

    public void send(Message message) {
        Client client = new Client();
        try {
            System.out.println("jsonMessage = " + JsonUtil.object2Json(message));
            client.start(JsonUtil.object2Json(message));
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }
}
