package com.shanke.config;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.Reader;

public class Connector {

    private static Connector connector = new Connector();

    private Connector() {
    }

    public static Connector getConnector() {
        return connector;
    }

    private static Reader reader;

    static {
        String resource = "mybatis-config.xml";
        try {
            reader = Resources.getResourceAsReader(resource);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public SqlSessionFactory getFactory() {
        return new SqlSessionFactoryBuilder().build(reader);
    }

}
