package com.shanke.db.mapper;

import com.shanke.info.JvmInfo;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;

public interface JvmMapper {

    @Insert("insert into jvm(time,domain,hostname,ip,gc_count,gc_time,old_gc_count,old_gc_time,young_gc_count,young_gc_time)" +
            "values (#{time},#{domain},#{hostname},#{ipAddress},#{jvmInfo.gcCount},#{jvmInfo.gcTime},#{jvmInfo.oldGcCount}," +
            "#{jvmInfo.oldGcTime},#{jvmInfo.youngGcCount},#{jvmInfo.youngGcTime})")
    void insert(@Param("domain") String domain, @Param("hostname") String hostname, @Param("ipAddress") String ipAddress, @Param("time") Long time, @Param("jvmInfo") JvmInfo jvmInfo);
}
