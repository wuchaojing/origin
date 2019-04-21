package com.shanke.manager.mapper;

import com.shanke.manager.entity.SystemInfo;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface SystemMapper {

    @Insert("insert into system(time,domain,hostname,ip,load_average,max_physic_memory,used_physic_memory,max_swap_space,used_swap_space) values(" +
            "#{time},#{domain},#{hostname},#{ipAddress},#{systemInfo.loadAverage},#{systemInfo.totalPhysicMemory},#{systemInfo.usedPhysicMemory}," +
            "#{systemInfo.totalSwapSpace},#{systemInfo.usedSwapSpace})")
    void insert(@Param("domain") String domain, @Param("hostname") String hostname, @Param("ipAddress") String ipAddress, @Param("time") Long time, @Param("systemInfo") SystemInfo systemInfo);

    @Results({
            @Result(property = "loadAverage", column = "load_average"),
            @Result(property = "usedPhysicMemory", column = "used_physic_memory"),
            @Result(property = "usedSwapSpace", column = "used_swap_space")
    })
    @Select("select time,load_average,used_physic_memory,used_swap_space from system where domain = #{domain} and hostname = #{hostname} and time >= #{startTime} and time < #{endTime}")
    List<SystemInfo> select(@Param("domain") String domain, @Param("hostname") String hostname, @Param("startTime") Long startTime, @Param("endTime") Long endTime);

}
