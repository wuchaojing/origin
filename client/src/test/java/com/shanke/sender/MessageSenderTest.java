package com.shanke.sender;

import com.shanke.message.impl.Transaction;
import com.shanke.netty.Client;
import org.junit.Test;

public class MessageSenderTest {

    @Test
    public void send() throws InterruptedException {
        Client client = new Client();
        Transaction transaction = new Transaction("a","b");
        client.start(transaction);
    }

}
