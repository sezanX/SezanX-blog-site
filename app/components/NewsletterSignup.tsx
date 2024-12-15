'use client'

import { useState } from 'react'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log(`Signing up ${email} for newsletter`)
    setEmail('')
  }

  return (
    <div className="bg-muted rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded mb-2 bg-background text-foreground"
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsletterSignup

