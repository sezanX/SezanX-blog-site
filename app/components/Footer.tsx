import Link from 'next/link'
import { Twitter, Facebook, Instagram, Rss } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SezanX</h3>
            <p className="text-muted-foreground">
              Exploring the frontiers of technology and innovation through AI-enhanced insights.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/categories" className="text-muted-foreground hover:text-primary transition-colors">Categories</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/category/ai" className="text-muted-foreground hover:text-primary transition-colors">Artificial Intelligence</Link></li>
              <li><Link href="/category/web-dev" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/category/blockchain" className="text-muted-foreground hover:text-primary transition-colors">Blockchain</Link></li>
              <li><Link href="/category/ux-design" className="text-muted-foreground hover:text-primary transition-colors">UX Design</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Rss className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">&copy; 2023 SezanX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

