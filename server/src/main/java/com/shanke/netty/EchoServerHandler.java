package com.shanke.netty;

import com.shanke.message.Message;
import com.shanke.message.impl.Transaction;
import com.shanke.utils.JsonUtil;
import io.netty.channel.ChannelHandler.Sharable;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;

import java.io.IOException;

@Sharable
public class EchoServerHandler extends ChannelInboundHandlerAdapter {

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws IOException {
        System.out.println("Server channelRead....");
        System.out.println(ctx.channel().remoteAddress() + "->Server :" + msg.toString());

        Message message = JsonUtil.json2Object(msg.toString(), Message.class);
        if (message.getMessageType().equals("transaction")) {

        } else if (message.getMessageType().equals("heartBeat")) {

        } else {

        }

    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        cause.printStackTrace();
        ctx.close();
    }
}
