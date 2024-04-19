import {MessageHandler} from "@/entrypoints/messages/MessageFacade.ts";
import ExtMessage from "../types";

export class ClickExtIconMsgHandler implements MessageHandler {
    handleMsg(message: ExtMessage): void {
        throw new Error("Method not implemented.");
    }

}