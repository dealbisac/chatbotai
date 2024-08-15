import { type Message as TMessage } from "ai/react"

interface MessagesProps {
    messages: TMessage[]
}
const Messages = ( {messages} : MessagesProps) => {
  return (
    <div className="flex">
        {messages.map((message) => (
            <div key={message.id}>
                {message.content}
            </div>
        ))}
    </div>
  )
}

export default Messages