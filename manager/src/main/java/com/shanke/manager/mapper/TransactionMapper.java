package com.shanke.manager.mapper;

import com.shanke.manager.entity.Transaction;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface TransactionMapper {

    @Select("select distinct hostname from transaction where domain = #{domain}")
    List<String> getMachines(@Param("domain") String domain);

    @Results({@Result(property = "durationTime", column = "duration")})
    @Select("select type,duration from transaction where domain = #{domain} and time >= #{startTime} and time < #{endTime}")
    List<Transaction> getByDomainTime(@Param("domain") String domain, @Param("startTime") Long startTime,@Param("endTime") Long endTime);

    @Results({@Result(property = "durationTime", column = "duration")})
    @Select("select type,duration from transaction where domain = #{domain} and time >= #{time} and time < #{endTime} and hostname = #{machine}")
    List<Transaction> getWithMachine(@Param("time") Long time, @Param("endTime") Long endTime, @Param("domain") String domain, @Param("machine") String machine);

    @Results({@Result(property = "durationTime", column = "duration")})
    @Select("select type,duration from transaction where domain = #{domain} and time >= #{time} and time < #{endTime}")
    List<Transaction> getWithoutMachine(@Param("time") Long time, @Param("endTime") Long endTime, @Param("domain") String domain);

    @Results({@Result(property = "durationTime", column = "duration")})
    @Select("select hostname,duration from transaction where domain = #{domain} and time >= #{time} and time < #{endTime} and type= #{type}")
    List<Transaction> getWithoutMachineType(@Param("time") Long time, @Param("endTime") Long endTime, @Param("domain") String domain, @Param("type") String type);

    @Results({@Result(property = "durationTime", column = "duration")})
    @Select("select hostname,duration from transaction where domain = #{domain} and time >= #{time} and time < #{endTime} and hostname = #{machine} and type= #{type}")
    List<Transaction> getWithMachineType(@Param("time") Long time, @Param("endTime") Long endTime, @Param("domain") String domain, @Param("machine") String machine, @Param("type") String type);

    @Results({@Result(property = "durationTime", column = "duration")})
    @Select("select name,duration from transaction where domain = #{domain} and type = #{type} and time >= #{startTime} and time < #{endTime}")
    List<Transaction> getNamesWithoutMachine(@Param("type") String type, @Param("startTime") Long startTime, @Param("endTime") Long endTime, @Param("domain") String domain);

    @Results({@Result(property = "durationTime", column = "duration")})
    @Select("select name,duration from transaction where domain = #{domain} and type = #{type} and time >= #{startTime} and time < #{endTime} and hostname = #{machine}")
    List<Transaction> getNamesWithMachine(@Param("type") String type, @Param("startTime") Long startTime, @Param("endTime") Long endTime, @Param("domain") String domain, @Param("machine") String machine);

    @Results({@Result(property = "durationTime", column = "duration")})
    @Select("select hostname,duration from transaction where domain = #{domain} and type = #{type} and name = #{name} and time >= #{startTime} and time < #{endTime}")
    List<Transaction> getWithoutMachineTypeName(@Param("startTime") Long startTime, @Param("endTime") Long endTime, @Param("domain") String domain, @Param("type") String type, @Param("name") String name);

    @Results({@Result(property = "durationTime", column = "duration")})
    @Select("select hostname,duration from transaction where domain = #{domain} and type = #{type} and name = #{name} and time >= #{startTime} and time < #{endTime} and hostname = #{machine} and hostname = #{machine}")
    List<Transaction> getWithMachineTypeName(@Param("startTime") Long startTime, @Param("endTime") Long endTime, @Param("domain") String domain, @Param("machine") String machine, @Param("type") String type, @Param("name") String name);
}
