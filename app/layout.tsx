import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'
import { AIProvider } from './components/AIProvider'
import AdDisplay from './components/AdDisplay'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SezanX - Smart AI-Powered Blog',
  description: 'Explore cutting-edge insights with SezanX, your AI-enhanced blogging platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AIProvider>
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-background to-background/80">
              <Header />
              <AdDisplay location="header" />
              <main className="flex-grow container mx-auto px-4 py-8">
                <div className="flex">
                  <div className="flex-grow">
                    {children}
                  </div>
                  <aside className="w-1/4 ml-4">
                    <AdDisplay location="sidebar" />
                  </aside>
                </div>
              </main>
              <AdDisplay location="footer" />
              <Footer />
            </div>
          </AIProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

