import Link from 'next/link'

const topics = [
  { name: 'Artificial Intelligence', slug: 'ai', count: 15 },
  { name: 'Web Development', slug: 'web-dev', count: 12 },
  { name: 'Blockchain', slug: 'blockchain', count: 8 },
  { name: 'UX Design', slug: 'ux-design', count: 10 },
  { name: 'Data Science', slug: 'data-science', count: 9 },
]

const TrendingTopics = () => {
  return (
    <div className="bg-muted rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">Trending Topics</h3>
      <ul className="space-y-2">
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link 
              href={`/category/${topic.slug}`}
              className="flex justify-between items-center hover:bg-background rounded-lg p-2 transition-colors"
            >
              <span>{topic.name}</span>
              <span className="bg-primary text-primary-foreground text-xs font-semibold rounded-full px-2 py-1">
                {topic.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrendingTopics

