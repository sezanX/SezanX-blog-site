import Link from 'next/link'

const categories = [
  { name: 'Web Development', slug: 'web-development', count: 15 },
  { name: 'AI', slug: 'ai', count: 8 },
  { name: 'Design', slug: 'design', count: 12 },
  { name: 'Programming', slug: 'programming', count: 20 },
  { name: 'DevOps', slug: 'devops', count: 6 },
]

export default function Categories() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="bg-muted rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-muted-foreground">{category.count} posts</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

