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

const ChatInput = ({handleInputChange, handleSubmit, input, setInput}: ChatInputProps) => {
  return (
    <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
        <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:max-auto lg:max-w-2xl xl:max-w-3xl">
            <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                <div className="relative flex flex-col w-full flex-grow p-4">
                    <form onSubmit={handleSubmit} className="relative">
                        <Textarea
                            value={input}
                            autoFocus
                            onChange={handleInputChange}
                            onKeyDown={(e) =>{
                                if(e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault()
                                    handleSubmit()
                                    setInput("")
                                }
                            }}
                            placeholder="Enter your question.."
                            className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base text-gray-500"
                            minRows={4}
                        />
                        <Button
                            onClick={handleSubmit}
                            className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2"
                            size="sm"
                            type="submit"
                        >
                            <Send className="size-4"/>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatInput