package com.shanke.db.mapper;

import com.shanke.message.Transaction;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;

public interface TransactionMapper {

    @Insert("insert into transaction(time,domain,type,name,hostname,ip,duration) values" +
            "(#{transaction.startTime},#{transaction.domain},#{transaction.type},#{transaction.name},#{transaction.hostName}," +
            "#{transaction.ipAddress},#{transaction.durationTime})")
    void insert(@Param("transaction") Transaction transaction);

}
