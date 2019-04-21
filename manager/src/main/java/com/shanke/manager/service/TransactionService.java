package com.shanke.manager.service;

import com.shanke.manager.entity.Transaction;
import com.shanke.manager.entity.TransactionCount;
import com.shanke.manager.mapper.TransactionMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

@Service
public class TransactionService {

    @Resource
    private TransactionMapper transactionMapper;

    public List<TransactionCount> enterIndex(String domain, Long startTime, Long endTime) {

        List<Transaction> transactions = transactionMapper.getByDomainTime(domain, startTime, endTime);
        return getTransactionCountsTypes(transactions);
    }

    public List<String> getMachines(String domain) {
        return transactionMapper.getMachines(domain);
    }

    public List<TransactionCount> getType(String domain, String machine, Long time, Long endTime) {
        List<Transaction> transactions;
        if (machine.equals("all")) {
            transactions = transactionMapper.getWithoutMachine(time, endTime, domain);
        } else {
            transactions = transactionMapper.getWithMachine(time, endTime, domain, machine);
        }
        return getTransactionCountsTypes(transactions);
    }

    private List<TransactionCount> getTransactionCountsTypes(List<Transaction> transactions) {
        Map<String, List<Long>> map = new HashMap<>();
        for (Transaction transaction : transactions) {
            String type = transaction.getType();
            if (map.containsKey(type)) {
                List<Long> list = map.get(type);
                list.add(transaction.getDurationTime());
            } else {
                List<Long> list = new ArrayList<>();
                list.add(transaction.getDurationTime());
                map.put(type, list);
            }
        }

        List<TransactionCount> transactionCounts = new ArrayList<>();

        for (Map.Entry<String, List<Long>> entry : map.entrySet()) {
            String type = entry.getKey();
            List<Long> values = entry.getValue();
            Collections.sort(values);

            Integer total = values.size();
            Long min = values.get(0);
            Long max = values.get(total - 1 < 0 ? 0 : total - 1);
            Long avg = values.get((int) (total * 0.5) - 1 < 0 ? 0 : (int) (total * 0.5) - 1);
            Long line95 = values.get((int) (total * 0.95) - 1 < 0 ? 0 : (int) (total * 0.95) - 1);
            Long line99 = values.get((int) (total * 0.99) - 1 < 0 ? 0 : (int) (total * 0.99) - 1);
            TransactionCount transactionCount = new TransactionCount(type, total, min, max, avg, line95, line99);
            transactionCounts.add(transactionCount);
        }
        return transactionCounts;
    }

    private List<TransactionCount> getTransactionCountsNames(List<Transaction> transactions) {
        Map<String, List<Long>> map = new HashMap<>();
        for (Transaction transaction : transactions) {
            String name = transaction.getName();
            if (map.containsKey(name)) {
                List<Long> list = map.get(name);
                list.add(transaction.getDurationTime());
            } else {
                List<Long> list = new ArrayList<>();
                list.add(transaction.getDurationTime());
                map.put(name, list);
            }
        }

        List<TransactionCount> transactionCounts = new ArrayList<>();

        for (Map.Entry<String, List<Long>> entry : map.entrySet()) {
            String name = entry.getKey();
            List<Long> values = entry.getValue();
            Collections.sort(values);

            Integer total = values.size();
            Long min = values.get(0);
            Long max = values.get(total - 1 < 0 ? 0 : total - 1);
            Long avg = values.get((int) (total * 0.5) - 1 < 0 ? 0 : (int) (total * 0.5) - 1);
            Long line95 = values.get((int) (total * 0.95) - 1 < 0 ? 0 : (int) (total * 0.95) - 1);
            Long line99 = values.get((int) (total * 0.99) - 1 < 0 ? 0 : (int) (total * 0.99) - 1);
            TransactionCount transactionCount = new TransactionCount(total, min, max, avg, line95, line99, name);
            transactionCounts.add(transactionCount);
        }
        return transactionCounts;
    }

    public List<TransactionCount> getDetailWithTypeName(String domain, String machine, String type, String name, Long startTime, Long endTime) {
        List<Transaction> transactions;
        if (machine.equals("all")) {
            transactions = transactionMapper.getWithoutMachineTypeName(startTime, endTime, domain, type, name);
        } else {
            transactions = transactionMapper.getWithMachineTypeName(startTime, endTime, domain, machine, type, name);
        }

        Map<String, List<Long>> map = new HashMap<>();
        for (Transaction transaction : transactions) {
            String hostName = transaction.getHostName();
            if (map.containsKey(hostName)) {
                List<Long> list = map.get(hostName);
                list.add(transaction.getDurationTime());
            } else {
                List<Long> list = new ArrayList<>();
                list.add(transaction.getDurationTime());
                map.put(hostName, list);
            }
        }

        List<TransactionCount> transactionCounts = new ArrayList<>();

        for (Map.Entry<String, List<Long>> entry : map.entrySet()) {
            String hostname = entry.getKey();
            List<Long> values = entry.getValue();
            Collections.sort(values);

            Integer total = values.size();
            Long min = values.get(0);
            Long max = values.get(total - 1 < 0 ? 0 : total - 1);
            Long avg = values.get((int) (total * 0.5) - 1 < 0 ? 0 : (int) (total * 0.5) - 1);
            Long line95 = values.get((int) (total * 0.95) - 1 < 0 ? 0 : (int) (total * 0.95) - 1);
            Long line99 = values.get((int) (total * 0.99) - 1 < 0 ? 0 : (int) (total * 0.99) - 1);
            TransactionCount transactionCount = new TransactionCount(total, min, max, avg, line95, line99);
            transactionCount.setHostname(hostname);
            transactionCounts.add(transactionCount);
        }
        return transactionCounts;

    }

    public List<TransactionCount> getDetailWithType(String domain, String machine, String type, Long startTime, Long endTime) {
        List<Transaction> transactions;
        if (machine.equals("all")) {
            transactions = transactionMapper.getWithoutMachineType(startTime, endTime, domain, type);
        } else {
            transactions = transactionMapper.getWithMachineType(startTime, endTime, domain, machine, type);
        }

        Map<String, List<Long>> map = new HashMap<>();
        for (Transaction transaction : transactions) {
            String hostName = transaction.getHostName();
            if (map.containsKey(hostName)) {
                List<Long> list = map.get(hostName);
                list.add(transaction.getDurationTime());
            } else {
                List<Long> list = new ArrayList<>();
                list.add(transaction.getDurationTime());
                map.put(hostName, list);
            }
        }

        List<TransactionCount> transactionCounts = new ArrayList<>();

        for (Map.Entry<String, List<Long>> entry : map.entrySet()) {
            String hostname = entry.getKey();
            List<Long> values = entry.getValue();
            Collections.sort(values);

            Integer total = values.size();
            Long min = values.get(0);
            Long max = values.get(total - 1 < 0 ? 0 : total - 1);
            Long avg = values.get((int) (total * 0.5) - 1 < 0 ? 0 : (int) (total * 0.5) - 1);
            Long line95 = values.get((int) (total * 0.95) - 1 < 0 ? 0 : (int) (total * 0.95) - 1);
            Long line99 = values.get((int) (total * 0.99) - 1 < 0 ? 0 : (int) (total * 0.99) - 1);
            TransactionCount transactionCount = new TransactionCount(total, min, max, avg, line95, line99);
            transactionCount.setHostname(hostname);
            transactionCounts.add(transactionCount);
        }
        return transactionCounts;

    }

    public List<TransactionCount> getNames(String domain, String machine, String type, Long startTime, Long endTime) {
        List<Transaction> transactions;
        if (machine.equals("all")) {
            transactions = transactionMapper.getNamesWithoutMachine(type, startTime, endTime, domain);
        } else {
            transactions = transactionMapper.getNamesWithMachine(type, startTime, endTime, domain, machine);
        }
        return getTransactionCountsNames(transactions);

    }
}
