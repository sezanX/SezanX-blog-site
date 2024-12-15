import { notFound } from 'next/navigation'
import prisma from '../../../lib/prisma'
import AdSpace from '../../components/AdSpace'
import RecentPosts from '../../components/RecentPosts'

export default async function Post({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!post) {
    notFound()
  }

  const recentPosts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
    where: { id: { not: post.id } },
  })

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <article className="md:w-2/3">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">Posted on {new Date(post.createdAt).toLocaleDateString()}</p>
        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
      </article>
      <div className="md:w-1/3 space-y-8">
        <AdSpace />
        <RecentPosts posts={recentPosts} />
      </div>
    </div>
  )
}

