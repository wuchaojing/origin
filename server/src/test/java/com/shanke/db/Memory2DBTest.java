package com.shanke.db;

import com.shanke.info.SystemInfo;
import com.shanke.message.impl.Transaction;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class Memory2DBTest {

    @Test
    public void testDB() {
        Memory2DB memory2DB = Memory2DB.getMemory2DB();
        List<Transaction> transactions = new ArrayList<>();
        transactions.add(new Transaction("a","b"));
        memory2DB.storeTransaction(System.currentTimeMillis(), transactions);
    }

}
