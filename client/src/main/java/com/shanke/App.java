package com.shanke;

import com.shanke.manager.impl.HeartBeatManager;
import com.shanke.manager.impl.TransactionManager;
import com.shanke.message.impl.Transaction;

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
                    //初始化jvm相关信息

                    init = true;
                }
            }

        }


    }

}
