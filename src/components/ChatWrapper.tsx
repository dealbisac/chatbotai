"use client"

import { useChat } from "ai/react"

const ChatWrapper = ({sessionId} : { sessionId: string }) => {
    const { messages } = useChat({
        api: "/api/chat-stream",
        body: {sessionId},
    })
  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
        <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
            ChatWrapper
        </div>
    </div>
  )
}

export default ChatWrapper