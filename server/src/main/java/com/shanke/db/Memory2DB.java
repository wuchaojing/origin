package com.shanke.db;

import com.shanke.config.Connector;
import com.shanke.db.mapper.JvmMapper;
import com.shanke.db.mapper.MemoryMapper;
import com.shanke.db.mapper.SystemMapper;
import com.shanke.db.mapper.TransactionMapper;
import com.shanke.info.JvmInfo;
import com.shanke.info.MemoryInfo;
import com.shanke.info.SystemInfo;
import com.shanke.message.HeartBeat;
import com.shanke.message.Transaction;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class Memory2DB {

    private static SqlSessionFactory factory = Connector.getConnector().getFactory();

    private static Memory2DB instance = new Memory2DB();

    private Memory2DB() {
    }

    public void storeTransaction(Long time, List<Transaction> transactions) {
        for (Transaction transaction : transactions) {
            SqlSession session = factory.openSession();
            TransactionMapper mapper = session.getMapper(TransactionMapper.class);
            mapper.insert(time, transaction);
        }
    }

    public static Memory2DB getInstance() {
        return instance;
    }

    public void storeHeartBeat(HeartBeat heartBeat) {
        String domain = heartBeat.getDomain();
        String hostname = heartBeat.getHostname();
        String ipAddress = heartBeat.getIpAddress();
        Long time = heartBeat.getTime();

        JvmInfo jvmInfo = heartBeat.getJvmInfo();
        MemoryInfo memoryInfo = heartBeat.getMemoryInfo();
        SystemInfo systemInfo = heartBeat.getSystemInfo();

        SqlSession sqlSession = factory.openSession();
        JvmMapper jvmMapper = sqlSession.getMapper(JvmMapper.class);
        jvmMapper.insert(domain, hostname, ipAddress, time, jvmInfo);

        sqlSession = factory.openSession();
        MemoryMapper memoryMapper = sqlSession.getMapper(MemoryMapper.class);
        memoryMapper.insert(domain, hostname, ipAddress, time, memoryInfo);

        sqlSession = factory.openSession();
        SystemMapper systemMapper = sqlSession.getMapper(SystemMapper.class);
        systemMapper.insert(domain, hostname, ipAddress, time, systemInfo);


    }
}
