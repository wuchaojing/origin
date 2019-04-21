package com.shanke;

import com.shanke.manager.HeartBeatManager;
import com.shanke.manager.TransactionManager;
import com.shanke.message.Transaction;

public class App {

    private static TransactionManager transactionManager;
    private static boolean init;
    private static App app = new App();

    public static void main(String[] args) {
        newTransaction("a", "b");
    }

    public static void newTransaction(String type, String name) {
        try {
            checkAndInitialize();

            Transaction transaction = new Transaction(type, name);
            transactionManager = TransactionManager.getInstance();
            transactionManager.addTransaction(transaction);
        } catch (Exception e) {
            System.out.println("监控系统异常，正在恢复...");
        }

    }

    public static void endTransaction() {
        transactionManager.endTransaction();
    }

    private static void checkAndInitialize() {
        if (!init) {
            synchronized (app) {
                if (!init) {

                    new HeartBeatManager();

                    init = true;
                }
            }
        }
    }
}
