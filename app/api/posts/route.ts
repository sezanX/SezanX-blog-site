import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

export async function GET() {
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  const json = await request.json()
  const post = await prisma.post.create({
    data: json,
  })
  return new NextResponse(JSON.stringify(post), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  })
}

