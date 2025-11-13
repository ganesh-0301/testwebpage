import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPostBySlug, blogPosts } from '@/lib/blogData'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const categoryLabels: Record<string, string> = {
    ai: 'Artificial Intelligence',
    webdev: 'Web Development',
    python: 'Python',
    nodejs: 'Node.js',
  }

  // Find related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
            {categoryLabels[post.category] || post.category.toUpperCase()}
          </span>
          <span className="text-gray-500 text-sm">{post.readTime} min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center justify-between text-gray-600">
          <div>
            <p className="font-semibold">{post.author}</p>
            <p className="text-sm">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </header>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none mb-12">
        <div className="text-gray-700 whitespace-pre-wrap">{post.content}</div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {relatedPost.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {relatedPost.excerpt}
                </p>
                <span className="text-primary-600 text-sm font-semibold mt-2 inline-block">
                  Read More →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

