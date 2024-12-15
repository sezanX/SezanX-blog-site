'use client'

import { useState, useEffect } from 'react'

interface Ad {
  id: number
  name: string
  content: string
  location: string
  isActive: boolean
}

export default function AdDisplay({ location }: { location: string }) {
  const [ad, setAd] = useState<Ad | null>(null)

  useEffect(() => {
    fetchAd()
  }, [location])

  const fetchAd = async () => {
    // In a real application, this would fetch from an API
    // For now, we'll use mock data
    const mockAds: Ad[] = [
      { id: 1, name: 'Sidebar Ad', content: '<div>Sidebar Ad Content</div>', location: 'sidebar', isActive: true },
      { id: 2, name: 'Header Ad', content: '<div>Header Ad Content</div>', location: 'header', isActive: true },
    ]
    const activeAd = mockAds.find(ad => ad.location === location && ad.isActive)
    setAd(activeAd || null)
  }

  if (!ad) return null

  return <div dangerouslySetInnerHTML={{ __html: ad.content }} />
}

