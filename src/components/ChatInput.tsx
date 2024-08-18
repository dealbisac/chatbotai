"use client"

import { Button, Textarea } from "@nextui-org/react"
import { Send } from "lucide-react"
import { type useChat } from "ai/react"

// Custom types for generic types
type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"]
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"]
type SetInput = ReturnType<typeof useChat>["setInput"]

interface ChatInputProps {
    input: string
    handleInputChange: HandleInputChange
    handleSubmit: HandleSubmit
    setInput: SetInput
}

const ChatInput = ({}: ChatInputProps) => {
  return (
    <div>ChatInput</div>
  )
}

export default ChatInput