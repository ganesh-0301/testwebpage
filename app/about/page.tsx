export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About TechBlog</h1>

        <div className="space-y-6 text-gray-700">
          <p className="text-lg">
            Welcome to TechBlog, your premier destination for staying updated
            with the latest developments in technology, artificial intelligence,
            web development, and programming.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Our Mission
            </h2>
            <p>
              Our mission is to provide high-quality, informative content that
              helps developers, tech enthusiasts, and professionals stay ahead
              of the curve. We cover everything from cutting-edge AI
              developments to practical web development tutorials, Python
              programming tips, Node.js best practices, and insights into
              modern development tools like Cursor IDE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What We Cover
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Artificial Intelligence:</strong> Latest AI models,
                machine learning techniques, and AI applications
              </li>
              <li>
                <strong>Web Development:</strong> Modern frameworks, best
                practices, and development trends
              </li>
              <li>
                <strong>Python:</strong> Language updates, libraries, and
                programming techniques
              </li>
              <li>
                <strong>Node.js:</strong> Backend development, APIs, and
                server-side JavaScript
              </li>
              <li>
                <strong>Development Tools:</strong> IDE reviews, productivity
                tips, and tool comparisons
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Our Approach
            </h2>
            <p>
              We believe in providing practical, actionable content that you can
              apply to your projects immediately. Our articles are written by
              experienced developers who understand the challenges you face
              daily. We focus on real-world examples, code snippets, and
              step-by-step guides that make complex topics accessible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Stay Connected
            </h2>
            <p>
              Whether you&apos;re a seasoned developer or just starting your tech
              journey, TechBlog has something for everyone. Browse our articles,
              explore different categories, and join our community of tech
              enthusiasts.
            </p>
            <p className="mt-4">
              Have questions or suggestions? Feel free to{' '}
              <a
                href="/contact"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                reach out to us
              </a>
              . We&apos;d love to hear from you!
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

