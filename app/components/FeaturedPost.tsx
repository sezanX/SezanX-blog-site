import Link from 'next/link'
import Image from 'next/image'

interface FeaturedPostProps {
  post: {
    id: number
    title: string
    content: string
    createdAt: Date
    category: string
    author: string
  }
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="bg-muted rounded-xl overflow-hidden shadow-lg">
      <div className="md:flex">
        <div className="md:w-1/2">
          <Image src="/placeholder.svg" alt="Featured post" width={800} height={600} className="w-full h-64 md:h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-6 md:p-8">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold rounded-full px-3 py-1 mb-2">
            {post.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{post.title}</h2>
          <p className="text-muted-foreground mb-4">{post.content.substring(0, 150)}...</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">{post.author}</span>
            <span className="text-sm text-muted-foreground">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
          <Link 
            href={`/post/${post.id}`}
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPost

