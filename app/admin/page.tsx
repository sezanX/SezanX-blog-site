import PostManager from '../components/PostManager'
import AdManager from '../components/AdManager'

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Post Management</h2>
          <PostManager />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Ad Management</h2>
          <AdManager />
        </section>
      </div>
    </div>
  )
}

