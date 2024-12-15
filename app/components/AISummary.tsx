'use client'

import { useState, useEffect } from 'react'
import { useAI } from './AIProvider'

const AISummary = () => {
  const [summary, setSummary] = useState('')
  const { generateSummary } = useAI()

  useEffect(() => {
    const generateAISummary = async () => {
      const content = "This is a sample content that would typically be the full text of recent blog posts and trending topics. In a real application, this would be dynamically generated based on the current content of the blog."
      const newSummary = await generateSummary(content)
      setSummary(newSummary)
    }

    generateAISummary()
  }, [generateSummary])

  return (
    <div className="bg-muted rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">AI-Generated Insights</h3>
      {summary ? (
        <p className="text-muted-foreground">{summary}</p>
      ) : (
        <p className="text-muted-foreground">Generating insights...</p>
      )}
    </div>
  )
}

export default AISummary

