package com.shanke.info;

import org.junit.Test;

public class JvmInfoTest {

    @Test
    public void testJvm() {
        JvmInfo jvmInfo = new JvmInfo();
        System.out.println(jvmInfo.getGcCount());
        System.out.println(jvmInfo.getYoungGcCount());
        System.out.println(jvmInfo.getYoungGcAlgorithm());
    }

}
