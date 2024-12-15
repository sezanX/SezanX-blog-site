import Link from 'next/link'

const recommendedPosts = [
  { id: 4, title: "5G Technology: Revolutionizing Connectivity", category: "Technology" },
  { id: 5, title: "The Rise of No-Code Platforms", category: "Development" },
  { id: 6, title: "Cybersecurity in the Age of IoT", category: "Security" },
]

const RecommendedPosts = () => {
  return (
    <div className="bg-muted rounded-xl p-6">
      <h3 className="text-2xl font-bold mb-4">Recommended for You</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendedPosts.map((post) => (
          <Link key={post.id} href={`/post/${post.id}`} className="block">
            <div className="bg-background rounded-lg p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-primary font-semibold">{post.category}</span>
              <h4 className="text-lg font-semibold mt-2">{post.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecommendedPosts

