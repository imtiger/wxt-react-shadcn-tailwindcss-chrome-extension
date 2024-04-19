import ExtMessage, {MessageType} from "@/entrypoints/types.ts";
import {ClickExtIconMsgHandler} from "@/entrypoints/messages/ClickExtIconMsgHandler.ts";

export interface MessageHandler {
    handleMsg(message: ExtMessage): void;
}

const handlers: Map<MessageType, MessageHandler> = new Map<MessageType, MessageHandler>();
handlers.set(MessageType.clickExtIcon, new ClickExtIconMsgHandler())

export default function handleMessage(message: ExtMessage) {
    let handler = handlers.get(message.messageType);
    if (handler) {
        handler.handleMsg(message);
    } else {
        console.log(`not support messageType:${message.messageType} `)
    }
}