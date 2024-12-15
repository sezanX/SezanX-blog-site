'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Search, Menu, X } from 'lucide-react'
import AIAssistant from './AIAssistant'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-background/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-primary">
            SezanX
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/categories" className="hover:text-primary transition-colors">Categories</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <AIAssistant />
            <button
              className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {isSearchOpen && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search SezanX..."
              className="w-full px-4 py-2 rounded-full bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        )}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <Link href="/" className="block py-2 hover:text-primary transition-colors">Home</Link>
            <Link href="/categories" className="block py-2 hover:text-primary transition-colors">Categories</Link>
            <Link href="/about" className="block py-2 hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="block py-2 hover:text-primary transition-colors">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

