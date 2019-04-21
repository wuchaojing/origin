package com.shanke.manager.entity;

import lombok.Data;

@Data
public class TransactionCount {

    private String type;
    private Integer total;
    private Long min;
    private Long max;
    private Long avg;
    private Long line95;
    private Long line99;
    private Long qps;
    private String name;

    private String hostname;

    public TransactionCount(String type, Integer total, Long min, Long max, Long avg, Long line95, Long line99) {
        this.type = type;
        this.total = total;
        this.min = min;
        this.max = max;
        this.avg = avg;
        this.line95 = line95;
        this.line99 = line99;
    }

    public TransactionCount(Integer total, Long min, Long max, Long avg, Long line95, Long line99, String name) {
        this.name = name;
        this.total = total;
        this.min = min;
        this.max = max;
        this.avg = avg;
        this.line95 = line95;
        this.line99 = line99;
    }

    public TransactionCount(Integer total, Long min, Long max, Long avg, Long line95, Long line99) {
        this.total = total;
        this.min = min;
        this.max = max;
        this.avg = avg;
        this.line95 = line95;
        this.line99 = line99;
    }
}
