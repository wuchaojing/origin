package com.shanke.db.mapper;

import com.shanke.info.SystemInfo;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;

public interface SystemMapper {

    @Insert("insert into system(time,domain,hostname,ip,load_average,max_physic_memory,used_physic_memory,max_swap_space,used_swap_space) values(" +
            "#{time},#{domain},#{hostname},#{ipAddress},#{systemInfo.loadAverage},#{systemInfo.totalPhysicMemory},#{systemInfo.usedPhysicMemory}," +
            "#{systemInfo.totalSwapSpace},#{systemInfo.usedSwapSpace})")
    void insert(@Param("domain") String domain, @Param("hostname") String hostname, @Param("ipAddress") String ipAddress, @Param("time") Long time, @Param("systemInfo") SystemInfo systemInfo);
}
