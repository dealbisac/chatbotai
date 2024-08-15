import { type Message as TMessage } from "ai/react"
import Message from "./Message"
import { MessageCircleIcon } from "lucide-react"

interface MessagesProps {
    messages: TMessage[]
}
const Messages = ( {messages} : MessagesProps) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
        {messages? (messages.map((message, index) => (
            <Message 
                key={index} 
                content={message.content}
                isUserMessage={message.role === "user"}
            />
            ))
        ):(
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
            <MessageCircleIcon className="size-8 text-blue-500" />
            <h3 className="font-semibold text-xl text-white">You&rsquo;re all set.</h3>
            <p className="text-zinc-500 text-sm">Start a conversation by typing a question.</p>
        </div>
        )}
    </div>
  )
}

export default Messages