'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Ad {
  id: number
  name: string
  content: string
  location: string
  isActive: boolean
}

export default function AdManager() {
  const [ads, setAds] = useState<Ad[]>([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [location, setLocation] = useState('')
  const [isActive, setIsActive] = useState(true)
  const [editingId, setEditingId] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchAds()
  }, [])

  const fetchAds = async () => {
    // In a real application, this would fetch from an API
    // For now, we'll use mock data
    const mockAds: Ad[] = [
      { id: 1, name: 'Sidebar Ad', content: '<div>Sidebar Ad Content</div>', location: 'sidebar', isActive: true },
      { id: 2, name: 'Header Ad', content: '<div>Header Ad Content</div>', location: 'header', isActive: false },
    ]
    setAds(mockAds)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (editingId) {
      // Update existing ad
      setAds(ads.map(ad => 
        ad.id === editingId ? { ...ad, name, content, location, isActive } : ad
      ))
    } else {
      // Create new ad
      const newAd: Ad = {
        id: Math.max(...ads.map(ad => ad.id), 0) + 1,
        name,
        content,
        location,
        isActive
      }
      setAds([...ads, newAd])
    }
    resetForm()
    router.refresh()
  }

  const handleEdit = (ad: Ad) => {
    setName(ad.name)
    setContent(ad.content)
    setLocation(ad.location)
    setIsActive(ad.isActive)
    setEditingId(ad.id)
  }

  const handleDelete = async (id: number) => {
    setAds(ads.filter(ad => ad.id !== id))
    router.refresh()
  }

  const resetForm = () => {
    setName('')
    setContent('')
    setLocation('')
    setIsActive(true)
    setEditingId(null)
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ad Name"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Ad Content (HTML)"
          className="w-full p-2 border rounded"
          required
        />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Location</option>
          <option value="sidebar">Sidebar</option>
          <option value="header">Header</option>
          <option value="footer">Footer</option>
        </select>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            id="isActive"
            className="mr-2"
          />
          <label htmlFor="isActive">Active</label>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          {editingId ? 'Update Ad' : 'Create Ad'}
        </button>
      </form>
      <div className="space-y-4">
        {ads.map((ad) => (
          <div key={ad.id} className="border p-4 rounded">
            <h3 className="text-xl font-bold">{ad.name}</h3>
            <p>Location: {ad.location}</p>
            <p>Status: {ad.isActive ? 'Active' : 'Inactive'}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleEdit(ad)}
                className="px-2 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(ad.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

