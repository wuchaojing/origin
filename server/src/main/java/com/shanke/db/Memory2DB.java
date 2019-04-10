package com.shanke.db;

import com.shanke.mapper.Connector;
import com.shanke.mapper.TransactionMapper;
import com.shanke.message.impl.Transaction;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class Memory2DB {

    private Connector connector = Connector.getConnector();

    private static Memory2DB memory2DB = new Memory2DB();

    private Memory2DB() {
    }

    public void storeTransaction(Long time, List<Transaction> transactions) {
        for (Transaction transaction : transactions) {
            SqlSessionFactory factory = connector.getFactory();
            SqlSession session = factory.openSession();
            TransactionMapper mapper = session.getMapper(TransactionMapper.class);
            mapper.insert(time, transaction);
        }
    }

    public static Memory2DB getMemory2DB() {
        return memory2DB;
    }

}
