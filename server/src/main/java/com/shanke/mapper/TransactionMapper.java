package com.shanke.mapper;

import com.shanke.message.impl.Transaction;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;

public interface TransactionMapper {

    @Insert("insert into transaction(time,domain,type,name,hostname,ip,duration) values" +
            "(#{time},#{transaction.domain},#{transaction.type},#{transaction.name},#{transaction.hostName}," +
            "#{transaction.ipAddress},#{transaction.durationTime})")
    void insert(@Param("time") Long time, @Param("transaction") Transaction transaction);

}
