package com.shanke.sender;

import com.shanke.message.Message;
import com.shanke.message.Transaction;
import org.junit.Test;

public class MessageSenderTest {

    @Test
    public void send(){
        Transaction transaction = new Transaction("a", "b");
        Message message = new Message();
        message.setMessageType("transaction");
        message.setTransaction(transaction);

    }

}
