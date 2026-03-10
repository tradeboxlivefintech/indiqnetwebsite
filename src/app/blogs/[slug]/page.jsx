'use client'

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Calendar, ArrowLeft } from 'lucide-react'
import { blogArticles } from '@/data/blogArticles'

const formatDate = (dateStr) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

const BlogPostPage = () => {
  const params = useParams()
  const slug = params?.slug
  const article = blogArticles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
          <Link href="/blogs" className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:text-emerald-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-gray-500 text-sm flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(article.date)}
            </span>
            <span className="text-gray-500 text-sm">{article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>

          <div className="prose prose-gray max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {article.body}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4" /> All articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogPostPage
