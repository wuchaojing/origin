package com.shanke.netty;

import com.shanke.handle.HeartBeatHandle;
import com.shanke.handle.TransactionHandle;
import com.shanke.message.Message;
import com.shanke.utils.JsonUtil;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandler.Sharable;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;

@Sharable
public class ReceiverHandler extends ChannelInboundHandlerAdapter {

    private TransactionHandle transactionHandle = TransactionHandle.getInstance();
    private HeartBeatHandle heartBeatHandle = HeartBeatHandle.getInstance();

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) {
        Message message = JsonUtil.json2Object(msg.toString(), Message.class);
        if (message.getMessageType().equals("transaction")) {
            System.out.println("message.getTransaction = " + message.getTransaction());
            transactionHandle.handle(message.getTransaction());
        } else if (message.getMessageType().equals("heartBeat")) {
            System.out.println("message.getHeartBeat = " + message.getHeartBeat());
            heartBeatHandle.handle(message.getHeartBeat());
        }

    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
        ctx.writeAndFlush(Unpooled.EMPTY_BUFFER)
                .addListener(ChannelFutureListener.CLOSE);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        cause.printStackTrace();
        ctx.close();
    }
}
