import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const post = await prisma.post.findUnique({
    where: { id },
  })
  if (post) {
    return NextResponse.json(post)
  } else {
    return new NextResponse(JSON.stringify({ error: 'Post not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const json = await request.json()
  const updatedPost = await prisma.post.update({
    where: { id },
    data: json,
  })
  return NextResponse.json(updatedPost)
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  await prisma.post.delete({
    where: { id },
  })
  return new NextResponse(null, { status: 204 })
}

