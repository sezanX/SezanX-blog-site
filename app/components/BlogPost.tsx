import Link from 'next/link'

interface BlogPostProps {
  post: {
    id: number
    title: string
    content: string
    createdAt: Date
    category: string
    author: string
  }
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <article className="bg-muted rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold rounded-full px-3 py-1">
          {post.category}
        </span>
        <span className="text-sm text-muted-foreground">
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-muted-foreground mb-4">{post.content.substring(0, 150)}...</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{post.author}</span>
        <Link href={`/post/${post.id}`} className="text-primary hover:underline">
          Read more →
        </Link>
      </div>
    </article>
  )
}

export default BlogPost

