'use client'

import React from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight, FileText } from 'lucide-react'
import { blogArticles } from '@/data/blogArticles'

const formatDate = (dateStr) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

const BlogsPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-4">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">Articles & Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Blogs
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Perspectives on markets, technical analysis, and disciplined investing from India Equity Network.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mx-auto rounded-full mt-6" />
        </div>
      </section>

      {/* Articles grid */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article) => (
              <article
                key={article.slug}
                className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(article.date)}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${article.slug}`}
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm group/link hover:text-emerald-700"
                  >
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogsPage
