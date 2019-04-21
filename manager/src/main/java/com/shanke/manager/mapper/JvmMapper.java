package com.shanke.manager.mapper;

import com.shanke.manager.entity.JvmInfo;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface JvmMapper {

    @Insert("insert into jvm(time,domain,hostname,ip,gc_count,gc_time,old_gc_count,old_gc_time,young_gc_count,young_gc_time)" +
            "values (#{time},#{domain},#{hostname},#{ipAddress},#{jvmInfo.gcCount},#{jvmInfo.gcTime},#{jvmInfo.oldGcCount}," +
            "#{jvmInfo.oldGcTime},#{jvmInfo.youngGcCount},#{jvmInfo.youngGcTime})")
    void insert(@Param("domain") String domain, @Param("hostname") String hostname, @Param("ipAddress") String ipAddress, @Param("time") Long time, @Param("jvmInfo") JvmInfo jvmInfo);

    @Results({
            @Result(property = "gcCount", column = "gc_count"),
            @Result(property = "gcTime", column = "gc_time"),
            @Result(property = "oldGcCount", column = "old_gc_count"),
            @Result(property = "oldGcTime", column = "old_gc_time"),
            @Result(property = "youngGcCount", column = "young_gc_count"),
            @Result(property = "youngGcTime", column = "young_gc_time"),
    })
    @Select("select time,gc_count,gc_time,old_gc_count,old_gc_time,young_gc_count,young_gc_time from jvm where domain = #{domain} and hostname = #{hostname} and time >= #{startTime} and time < #{endTime}")
    List<JvmInfo> select(@Param("domain") String domain, @Param("hostname") String hostname, @Param("startTime") Long startTime, @Param("endTime") Long endTime);


}
