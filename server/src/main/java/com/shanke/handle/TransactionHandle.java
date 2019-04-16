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
        System.out.println("transaction = " + transaction);
        Long currentHour = System.currentTimeMillis() - System.currentTimeMillis() % 3600000;

//        // todo thread
//        if (map.size() != 0 && !map.containsKey(currentHour)) {
//
//            Long time;
//
//            for (Map.Entry<Long, List<Transaction>> entry : map.entrySet()) {
//                time = entry.getKey();
//                memory2DB.storeTransaction(time, entry.getValue());
//            }
//
//            map.clear();
//
//            List<Transaction> transactions = new ArrayList<>();
//            transactions.add(transaction);
//
//            map.put(currentHour, transactions);
//            return;
//        }
        memory2DB.storeTransaction(currentHour,transaction);

//        List<Transaction> transactions = map.get(currentHour);
//        if (transactions == null) {
//            transactions = new ArrayList<>();
//        }
//        transactions.add(transaction);
//        map.put(currentHour, transactions);
    }
}
