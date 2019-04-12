package com.shanke.info;

import lombok.Data;

@Data
public class JvmInfo {

    private long gcCount;
    private long gcTime;
    private long oldGcCount;
    private long oldGcTime;
    private long youngGcCount;
    private long youngGcTime;

    public JvmInfo() {
    }
}
