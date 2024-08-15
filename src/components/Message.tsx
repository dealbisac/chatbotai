interface MessagesProps {
    content: string,
    isUserMessage: boolean
}

const Message = ({ content, isUserMessage}: MessagesProps) => {
  return (
    <div>Message</div>
  )
}

export default Message