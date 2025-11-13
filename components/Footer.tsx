import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechBlog</h3>
            <p className="text-gray-400">
              Your source for the latest in technology, AI, web development, and
              more.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog?category=ai"
                  className="text-gray-400 hover:text-white"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=webdev"
                  className="text-gray-400 hover:text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=python"
                  className="text-gray-400 hover:text-white"
                >
                  Python
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=nodejs"
                  className="text-gray-400 hover:text-white"
                >
                  Node.js
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

