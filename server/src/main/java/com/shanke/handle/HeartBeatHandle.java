package com.shanke.handle;

import com.shanke.db.Memory2DB;
import com.shanke.message.HeartBeat;

public class HeartBeatHandle {

    private static HeartBeatHandle instance = new HeartBeatHandle();

    private static Memory2DB memory2DB = Memory2DB.getInstance();

    private HeartBeatHandle() {

    }

    public static HeartBeatHandle getInstance() {
        return instance;
    }

    public void handle(HeartBeat heartBeat) {
        memory2DB.storeHeartBeat(heartBeat);
    }

}
