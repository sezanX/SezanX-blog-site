import Link from 'next/link'

interface RecentPostsProps {
  posts: {
    id: number
    title: string
  }[]
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentPosts

