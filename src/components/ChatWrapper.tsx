"use client"

import { useChat } from "ai/react"
import Messages from "./Messages"
import ChatInput from "./ChatInput"

const ChatWrapper = ({sessionId} : { sessionId: string }) => {
    // const [input, seInput] = useState("")

    const { messages, handleInputChange, handleSubmit, input, setInput} = useChat({
        api: "/api/chat-stream",
        body: {sessionId},
    })
  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
        <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
            {/* {JSON.stringify(messages)} */}
            <Messages messages={messages} />
        </div>

        {/* <form onSubmit={handleSubmit}>
            <input 
                value={input} 
                onChange={handleInputChange} 
                className="text-black"
                type="text"
            />

            <button 
                type="submit"
            >
                Send
            </button>
        </form> */}

        <ChatInput 
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setInput={setInput}
        />
        
    </div>
  )
}

export default ChatWrapper