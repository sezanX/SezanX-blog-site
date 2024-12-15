'use client'

import { useState, useEffect } from 'react'
import { useAI } from './AIProvider'
import Link from 'next/link'

const PersonalizedRecommendations = () => {
  const [recommendations, setRecommendations] = useState<string[]>([])
  const { generateRecommendations } = useAI()

  useEffect(() => {
    const fetchRecommendations = async () => {
      // In a real app, user preferences would come from a user profile or browsing history
      const userPreferences = ['AI', 'Web Development', 'Data Science']
      const newRecommendations = await generateRecommendations(userPreferences)
      setRecommendations(newRecommendations)
    }

    fetchRecommendations()
  }, [generateRecommendations])

  return (
    <div className="bg-muted rounded-xl p-6">
      <h3 className="text-2xl font-bold mb-4">Personalized For You</h3>
      <ul className="space-y-2">
        {recommendations.map((recommendation, index) => (
          <li key={index}>
            <Link href="#" className="text-primary hover:underline">
              {recommendation}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PersonalizedRecommendations

