package com.shanke.manager.response;

import lombok.Data;

@Data
public class ResultInfo {

    public Integer code;
    public Object data;

    public ResultInfo(Integer code, Object data) {
        this.code = code;
        this.data = data;
    }
}
