package com.shanke.handle;

import com.shanke.db.Memory2DB;
import com.shanke.message.Transaction;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TransactionHandle {

    private static TransactionHandle transactionHandle = new TransactionHandle();

    private Memory2DB memory2DB = Memory2DB.getInstance();

    private Map<Long, List<Transaction>> map = new HashMap<>();

    public static TransactionHandle getInstance() {
        return transactionHandle;
    }

    public void handle(Transaction transaction) {
        memory2DB.storeTransaction(transaction);

    }
}
