package com.shanke.manager.mapper;

import com.shanke.manager.entity.MemoryInfo;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface MemoryMapper {

    @Insert("insert into memory(time,domain,hostname,ip,max_memory,used_memory,max_oldgen,used_oldgen," +
            "max_permgen,used_permgen,max_eden_space,used_eden_space,max_survivor_space,used_survivor_space," +
            "max_meta_space,used_meta_space,max_nonheap_memory,used_nonheap_memory) values(#{time},#{domain}," +
            "#{hostname},#{ipAddress},#{memoryInfo.maxMemory},#{memoryInfo.usedMemory},#{memoryInfo.maxOldGen}," +
            "#{memoryInfo.usedOldGen},#{memoryInfo.maxPermGen},#{memoryInfo.usedPermGen},#{memoryInfo.maxEdenSpace}," +
            "#{memoryInfo.usedEdenSpace},#{memoryInfo.maxSurvivorSpace},#{memoryInfo.usedSurvivorSpace}," +
            "#{memoryInfo.maxMetaSpace},#{memoryInfo.usedMetaSpace},#{memoryInfo.maxNonHeapMemory},#{memoryInfo.usedNonHeapMemory})")
    void insert(@Param("domain") String domain, @Param("hostname") String hostname, @Param("ipAddress") String ipAddress, @Param("time") Long time, @Param("memoryInfo") MemoryInfo memoryInfo);

    @Results({
            @Result(property = "usedMemory", column = "used_memory"),
            @Result(property = "usedOldGen", column = "used_oldgen"),
            @Result(property = "usedPermGen", column = "used_permgen"),
            @Result(property = "usedEdenSpace", column = "used_eden_space"),
            @Result(property = "usedSurvivorSpace", column = "used_survivor_space"),
            @Result(property = "usedMetaSpace", column = "used_meta_space"),
            @Result(property = "usedNonHeapMemory", column = "used_nonheap_memory")
    })

    @Select("select time,used_memory,used_oldgen,used_permgen,used_eden_space,used_survivor_space,used_meta_space,used_nonheap_memory from memory " +
            "where domain = #{domain} and hostname = #{hostname} and time >= #{startTime} and time < #{endTime}")
    List<MemoryInfo> select(@Param("domain") String domain, @Param("hostname") String hostname, @Param("startTime") Long startTime, @Param("endTime") Long endTime);
}
