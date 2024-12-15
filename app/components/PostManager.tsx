'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Post {
  id: number
  title: string
  content: string
  author: string
  category: string
}

export default function PostManager() {
  const [posts, setPosts] = useState<Post[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const response = await fetch('/api/posts')
    const data = await response.json()
    setPosts(data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (editingId) {
      await fetch(`/api/posts/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, author, category }),
      })
    } else {
      await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, author, category }),
      })
    }
    setTitle('')
    setContent('')
    setAuthor('')
    setCategory('')
    setEditingId(null)
    fetchPosts()
    router.refresh()
  }

  const handleEdit = (post: Post) => {
    setTitle(post.title)
    setContent(post.content)
    setAuthor(post.author)
    setCategory(post.category)
    setEditingId(post.id)
  }

  const handleDelete = async (id: number) => {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' })
    fetchPosts()
    router.refresh()
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          {editingId ? 'Update Post' : 'Create Post'}
        </button>
      </form>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p>{post.content.substring(0, 100)}...</p>
            <p>Author: {post.author}</p>
            <p>Category: {post.category}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleEdit(post)}
                className="px-2 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

