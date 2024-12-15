import Link from 'next/link'
import BlogPost from './components/BlogPost'
import FeaturedPost from './components/FeaturedPost'
import TrendingTopics from './components/TrendingTopics'
import NewsletterSignup from './components/NewsletterSignup'
import AISummary from './components/AISummary'
import RecommendedPosts from './components/RecommendedPosts'
import PersonalizedRecommendations from './components/PersonalizedRecommendations'
import prisma from '../lib/prisma'

export default async function Home() {
  const blogPosts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  return (
    <div className="flex flex-col gap-12">
      {blogPosts.length > 0 && <FeaturedPost post={blogPosts[0]} />}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-6">Latest Insights</h2>
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/archive" className="text-primary hover:underline">
              View all posts →
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 space-y-8">
          <TrendingTopics />
          <AISummary />
          <PersonalizedRecommendations />
          <NewsletterSignup />
        </div>
      </div>
      <RecommendedPosts />
    </div>
  )
}

