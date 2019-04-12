package com.shanke;

import com.shanke.manager.HeartBeatManager;
import com.shanke.manager.TransactionManager;
import com.shanke.message.Transaction;

public class App {

    private static TransactionManager transactionManager;
    private static boolean init;
    private static App app = new App();

    public static void newTransaction(String type, String name) {
        checkAndInitialize();

        Transaction transaction = new Transaction(type, name);
        transactionManager.addTransaction(transaction);
    }

    public static void endTransaction() {
        transactionManager.endTransaction();
    }

    private static void checkAndInitialize() {
        if (!init) {
            synchronized (app) {
                if (!init) {
                    transactionManager = TransactionManager.getInstance();

                    new HeartBeatManager();

                    init = true;
                }
            }

        }


    }

}
