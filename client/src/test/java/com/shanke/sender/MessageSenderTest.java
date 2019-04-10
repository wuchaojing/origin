package com.shanke.sender;

import com.shanke.message.Message;
import com.shanke.message.impl.Transaction;
import com.shanke.netty.Client;
import org.junit.Test;

import java.io.IOException;

public class MessageSenderTest {

    @Test
    public void send() throws InterruptedException, IOException {
        Client client = new Client();
        Transaction transaction = new Transaction("a", "b");
        Message message = new Message("transaction");
        message.setTransaction(transaction);

    }

}
