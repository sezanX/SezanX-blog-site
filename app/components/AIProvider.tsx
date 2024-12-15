'use client'

import React, { createContext, useContext, useState } from 'react'

interface AIContextType {
  generateResponse: (input: string) => Promise<string>
  generateSummary: (content: string) => Promise<string>
  generateRecommendations: (userPreferences: string[]) => Promise<string[]>
}

const AIContext = createContext<AIContextType | undefined>(undefined)

export const AIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [conversationHistory, setConversationHistory] = useState<string[]>([])

  const generateResponse = async (input: string): Promise<string> => {
    // In a real application, this would call an AI service
    // For now, we'll simulate an AI response
    setConversationHistory(prev => [...prev, input])
    const response = `AI response to: "${input}". (Based on conversation history of ${conversationHistory.length} messages)`
    setConversationHistory(prev => [...prev, response])
    return response
  }

  const generateSummary = async (content: string): Promise<string> => {
    // Simulate AI-generated summary
    return `This is an AI-generated summary of the content: "${content.substring(0, 50)}..."`
  }

  const generateRecommendations = async (userPreferences: string[]): Promise<string[]> => {
    // Simulate AI-generated recommendations
    return userPreferences.map(pref => `Recommended content based on your interest in ${pref}`)
  }

  return (
    <AIContext.Provider value={{ generateResponse, generateSummary, generateRecommendations }}>
      {children}
    </AIContext.Provider>
  )
}

export const useAI = () => {
  const context = useContext(AIContext)
  if (context === undefined) {
    throw new Error('useAI must be used within an AIProvider')
  }
  return context
}

