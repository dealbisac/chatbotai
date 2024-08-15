import { type Message as TMessage } from "ai/react"
import Message from "./Message"

interface MessagesProps {
    messages: TMessage[]
}
const Messages = ( {messages} : MessagesProps) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
        {messages? messages.map((message, index) => (
            <Message 
                key={index} 
                content={message.content}
                isUserMessage={message.role === "user"}
            />
        )):
        (<div>
            No messages
        </div>
        )}
    </div>
  )
}

export default Messages