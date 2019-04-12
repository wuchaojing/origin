package com.shanke.db.mapper;

import com.shanke.info.MemoryInfo;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;

public interface MemoryMapper {

    @Insert("insert into memory(time,domain,hostname,ip,max_memory,used_memory,max_oldgen,used_oldgen," +
            "max_permgen,used_permgen,max_eden_space,used_eden_space,max_survivor_space,used_survivor_space," +
            "max_meta_space,used_meta_space,max_nonheap_memory,used_nonheap_memory) values(#{time},#{domain}," +
            "#{hostname},#{ipAddress},#{memoryInfo.maxMemory},#{memoryInfo.usedMemory},#{memoryInfo.maxOldGen}," +
            "#{memoryInfo.usedOldGen},#{memoryInfo.maxPermGen},#{memoryInfo.usedPermGen},#{memoryInfo.maxEdenSpace}," +
            "#{memoryInfo.usedEdenSpace},#{memoryInfo.maxSurvivorSpace},#{memoryInfo.usedSurvivorSpace}," +
            "#{memoryInfo.maxMetaSpace},#{memoryInfo.usedMetaSpace},#{memoryInfo.maxNonHeapMemory},#{memoryInfo.usedNonHeapMemory})")
    void insert(@Param("domain") String domain, @Param("hostname") String hostname, @Param("ipAddress") String ipAddress, @Param("time") Long time, @Param("memoryInfo") MemoryInfo memoryInfo);
}
