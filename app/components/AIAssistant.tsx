'use client'

import { useState } from 'react'
import { Bot, X } from 'lucide-react'
import { useAI } from './AIProvider'

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { generateResponse } = useAI()
  const [userInput, setUserInput] = useState('')
  const [conversation, setConversation] = useState<{ role: 'user' | 'assistant'; content: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userInput.trim()) return

    setIsLoading(true)
    setConversation(prev => [...prev, { role: 'user', content: userInput }])
    const response = await generateResponse(userInput)
    setConversation(prev => [...prev, { role: 'assistant', content: response }])
    setUserInput('')
    setIsLoading(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-muted transition-colors"
        aria-label="AI Assistant"
      >
        <Bot className="h-5 w-5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-background border border-border rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">AI Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-64 overflow-y-auto mb-4">
            {conversation.map((message, index) => (
              <div key={index} className={`mb-2 p-2 rounded-lg ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
            {isLoading && <div className="text-center text-muted-foreground">AI is thinking...</div>}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full px-3 py-2 rounded-md bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : 'Ask'}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default AIAssistant

