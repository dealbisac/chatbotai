import { ragChat } from "@/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const { messages, sessionId } = await req.json()

    // get the content of the last message
    const lastMessage = messages[messages.length - 1].content

    // get the response from ragChat of the last message
    const response = await ragChat.chat(lastMessage, { streaming: true, sessionId })

    // return the response
    return aiUseChatAdapter(response);

    // console.log("response", response)
}