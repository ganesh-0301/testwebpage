export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  tags: string[]
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI: GPT-5 and Beyond',
    slug: 'future-of-ai-gpt5',
    excerpt:
      'Exploring the latest developments in AI technology and what GPT-5 might bring to the table.',
    content: `# The Future of AI: GPT-5 and Beyond

Artificial Intelligence has been advancing at an unprecedented pace. With GPT-4 already revolutionizing how we interact with AI, the tech community is eagerly anticipating what GPT-5 will bring.

## What We Know So Far

While OpenAI hasn't officially announced GPT-5, industry experts predict several key improvements:

### Enhanced Reasoning Capabilities
GPT-5 is expected to have significantly improved reasoning abilities, allowing it to tackle more complex problems with better accuracy.

### Multimodal Integration
The next generation will likely have better integration between text, images, audio, and video processing.

### Reduced Hallucinations
One of the biggest challenges with current AI models is their tendency to "hallucinate" or make up information. GPT-5 should address this with better fact-checking mechanisms.

## Impact on Development

For developers, these improvements mean:
- Better code generation and debugging assistance
- More accurate documentation generation
- Enhanced pair programming capabilities
- Improved automated testing

## The Road Ahead

As we look toward the future, it's clear that AI will continue to transform how we work, create, and solve problems. The key is to stay informed and adapt to these changes.

What are your thoughts on the future of AI? Share your predictions in the comments below!`,
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'ai',
    tags: ['AI', 'GPT-5', 'Machine Learning', 'Future Tech'],
    readTime: 5,
  },
  {
    id: '2',
    title: 'Next.js 14: What Developers Need to Know',
    slug: 'nextjs-14-developers-guide',
    excerpt:
      'A comprehensive guide to the latest features and improvements in Next.js 14.',
    content: `# Next.js 14: What Developers Need to Know

Next.js 14 has arrived with exciting new features that make building React applications even more powerful and efficient.

## Key Features

### Server Components by Default
Next.js 14 makes Server Components the default, which means better performance out of the box. Your components are rendered on the server, reducing the JavaScript bundle sent to clients.

### Turbopack Improvements
The new bundler continues to improve, offering faster refresh times and better development experience.

### Enhanced App Router
The App Router has matured significantly, with better TypeScript support and improved routing capabilities.

## Performance Improvements

- Faster page loads
- Reduced bundle sizes
- Better caching strategies
- Improved SEO capabilities

## Migration Guide

If you're upgrading from Next.js 13, here are the key steps:

1. Update your dependencies
2. Review your Server Components
3. Test your routing structure
4. Update your build configuration

## Best Practices

- Use Server Components when possible
- Leverage the new caching APIs
- Take advantage of streaming
- Optimize your images with next/image

Next.js 14 represents a significant step forward for the React ecosystem. Start exploring these features today!`,
    author: 'Mike Chen',
    date: '2024-01-10',
    category: 'webdev',
    tags: ['Next.js', 'React', 'Web Development', 'Framework'],
    readTime: 7,
  },
  {
    id: '3',
    title: 'Python 3.12: New Features and Performance Gains',
    slug: 'python-3-12-new-features',
    excerpt:
      'Discover the exciting new features and performance improvements in Python 3.12.',
    content: `# Python 3.12: New Features and Performance Gains

Python 3.12 has been released with significant improvements in both features and performance. Let's dive into what makes this release special.

## Performance Improvements

Python 3.12 shows impressive performance gains:
- Up to 10-15% faster overall
- Improved startup time
- Better memory efficiency

## New Features

### Enhanced Error Messages
Error messages are now more helpful, showing exactly where issues occur with better context.

### Type Parameter Syntax
A cleaner syntax for generic types makes code more readable:

\`\`\`python
def process[T](items: list[T]) -> list[T]:
    return items
\`\`\`

### Improved F-Strings
F-strings now support more expressions and have better error handling.

## What This Means for Developers

- Faster development cycles
- Better debugging experience
- More readable code
- Improved type hints

## Migration Considerations

Most code should work without changes, but you might want to:
- Update type hints to use new syntax
- Review error handling
- Test performance-critical code

Python 3.12 continues Python's tradition of making developers' lives easier while improving performance.`,
    author: 'David Rodriguez',
    date: '2024-01-05',
    category: 'python',
    tags: ['Python', 'Programming', 'Performance', 'Language Updates'],
    readTime: 6,
  },
  {
    id: '4',
    title: 'Node.js 20: LTS Features and Best Practices',
    slug: 'nodejs-20-lts-features',
    excerpt:
      'Exploring the new LTS features in Node.js 20 and how to leverage them in your projects.',
    content: `# Node.js 20: LTS Features and Best Practices

Node.js 20 has entered LTS (Long Term Support), making it the recommended version for production applications. Let's explore what's new.

## Key Features

### Built-in Test Runner
No more need for external test frameworks for simple tests:

\`\`\`javascript
import { test } from 'node:test';

test('my test', () => {
  // Your test code
});
\`\`\`

### Improved Performance
- Better V8 engine
- Enhanced async operations
- Improved memory management

### Security Enhancements
- Updated OpenSSL
- Better permission model
- Enhanced crypto capabilities

## Best Practices for Node.js 20

### Use the Test Runner
For simple projects, the built-in test runner is perfect. For complex scenarios, you can still use Jest or Mocha.

### Leverage ESM
ES Modules are now fully stable and recommended for new projects.

### Monitor Performance
Use the built-in performance monitoring tools to track your application's health.

## Migration Path

If you're upgrading from Node.js 18:
1. Review breaking changes
2. Update your dependencies
3. Test thoroughly
4. Update your CI/CD pipelines

Node.js 20 LTS provides a stable foundation for building modern applications.`,
    author: 'Emily Watson',
    date: '2024-01-01',
    category: 'nodejs',
    tags: ['Node.js', 'JavaScript', 'Backend', 'LTS'],
    readTime: 5,
  },
  {
    id: '5',
    title: 'Cursor IDE: Revolutionizing Code Editing with AI',
    slug: 'cursor-ide-ai-code-editing',
    excerpt:
      'How Cursor IDE is changing the way developers write code with AI-powered assistance.',
    content: `# Cursor IDE: Revolutionizing Code Editing with AI

Cursor IDE has emerged as a game-changer in the developer tools space, combining the power of VS Code with advanced AI capabilities.

## What Makes Cursor Special

### AI-Powered Code Completion
Cursor uses advanced AI models to provide context-aware code suggestions that understand your entire codebase.

### Chat-Based Development
Have a conversation with your IDE about your code. Ask questions, get explanations, and receive suggestions.

### Multi-File Understanding
Unlike traditional autocomplete, Cursor understands relationships across your entire project.

## Key Features

- **Composer Mode**: Generate entire features with natural language
- **Chat**: Ask questions about your codebase
- **Inline Editing**: AI-assisted code modifications
- **Codebase Indexing**: Fast search across your entire project

## Use Cases

### Rapid Prototyping
Generate boilerplate code quickly and focus on business logic.

### Code Refactoring
Get AI suggestions for improving code quality and maintainability.

### Learning
Understand unfamiliar codebases faster with AI explanations.

### Debugging
Get help identifying and fixing bugs more efficiently.

## Best Practices

- Be specific in your prompts
- Review AI-generated code carefully
- Use it as a learning tool
- Combine with your own expertise

Cursor represents the future of development tools, where AI and human developers work together seamlessly.`,
    author: 'Alex Thompson',
    date: '2023-12-28',
    category: 'webdev',
    tags: ['Cursor', 'IDE', 'AI', 'Development Tools'],
    readTime: 6,
  },
  {
    id: '6',
    title: 'Web Development Trends for 2024',
    slug: 'web-development-trends-2024',
    excerpt:
      'The top web development trends that will shape the industry in 2024.',
    content: `# Web Development Trends for 2024

As we move through 2024, several trends are shaping the web development landscape. Here's what you need to know.

## Top Trends

### 1. AI Integration
AI is becoming a standard part of web applications, from chatbots to content generation.

### 2. Server Components
React Server Components and similar technologies are reducing client-side JavaScript.

### 3. Edge Computing
Deploying applications closer to users improves performance and reduces latency.

### 4. WebAssembly
WASM continues to grow, enabling high-performance applications in the browser.

### 5. Progressive Web Apps
PWAs are becoming more sophisticated, blurring the line between web and native apps.

## Technology Stack Recommendations

### Frontend
- React 18+ with Server Components
- Next.js 14 or Remix
- TypeScript
- Tailwind CSS

### Backend
- Node.js 20 LTS
- Serverless functions
- Edge runtime support
- GraphQL or tRPC

### Tools
- Cursor IDE or GitHub Copilot
- Turborepo for monorepos
- Vercel or Netlify for deployment

## Skills to Develop

- AI/ML integration
- Server-side rendering
- Edge computing
- Performance optimization
- Accessibility

Stay ahead of the curve by learning these technologies and trends!`,
    author: 'Jessica Martinez',
    date: '2023-12-25',
    category: 'webdev',
    tags: ['Web Development', 'Trends', '2024', 'Technology'],
    readTime: 8,
  },
  {
    id: '7',
    title: 'Building Scalable APIs with Node.js and Express',
    slug: 'scalable-apis-nodejs-express',
    excerpt:
      'Best practices for building robust and scalable REST APIs using Node.js and Express.',
    content: `# Building Scalable APIs with Node.js and Express

Creating APIs that can handle growth is crucial for modern applications. Here's how to build scalable APIs with Node.js and Express.

## Architecture Principles

### Separation of Concerns
- Controllers handle HTTP requests
- Services contain business logic
- Models define data structure
- Middleware handles cross-cutting concerns

### Error Handling
Implement consistent error handling across your API:

\`\`\`javascript
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      code: err.code
    }
  });
});
\`\`\`

## Performance Optimization

### Caching
- Use Redis for session and data caching
- Implement HTTP caching headers
- Cache expensive computations

### Database Optimization
- Use connection pooling
- Implement database indexing
- Use query optimization techniques

### Rate Limiting
Protect your API from abuse:

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use('/api/', limiter);
\`\`\`

## Security Best Practices

- Validate all inputs
- Use HTTPS
- Implement authentication properly
- Sanitize user data
- Use environment variables for secrets

## Monitoring and Logging

- Log all important events
- Monitor API performance
- Set up alerts for errors
- Track usage metrics

Building scalable APIs requires careful planning and attention to detail. Follow these practices for success!`,
    author: 'Robert Kim',
    date: '2023-12-20',
    category: 'nodejs',
    tags: ['Node.js', 'Express', 'API', 'Backend'],
    readTime: 7,
  },
  {
    id: '8',
    title: 'Machine Learning with Python: Getting Started',
    slug: 'machine-learning-python-getting-started',
    excerpt:
      'A beginner-friendly guide to starting your machine learning journey with Python.',
    content: `# Machine Learning with Python: Getting Started

Python is the go-to language for machine learning. Here's how to get started on your ML journey.

## Essential Libraries

### NumPy
The foundation for numerical computing in Python.

### Pandas
Data manipulation and analysis made easy.

### Scikit-learn
Machine learning algorithms and tools.

### TensorFlow/PyTorch
Deep learning frameworks for complex models.

## Your First ML Project

### 1. Data Collection
Gather and prepare your dataset.

### 2. Data Preprocessing
Clean and transform your data:

\`\`\`python
import pandas as pd
from sklearn.preprocessing import StandardScaler

# Load data
df = pd.read_csv('data.csv')

# Preprocess
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
\`\`\`

### 3. Model Training
Train your model:

\`\`\`python
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier()
model.fit(X_train, y_train)
\`\`\`

### 4. Evaluation
Assess your model's performance:

\`\`\`python
from sklearn.metrics import accuracy_score

predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
\`\`\`

## Learning Resources

- Online courses (Coursera, edX)
- Books (Hands-On Machine Learning)
- Practice platforms (Kaggle)
- Documentation and tutorials

Start simple, practice regularly, and build progressively more complex projects!`,
    author: 'Lisa Anderson',
    date: '2023-12-15',
    category: 'python',
    tags: ['Python', 'Machine Learning', 'AI', 'Data Science'],
    readTime: 6,
  },
]

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug)
}

export const getBlogPostsByCategory = (
  category: string
): BlogPost[] => {
  return blogPosts.filter((post) => post.category === category)
}

export const getAllCategories = (): string[] => {
  return Array.from(new Set(blogPosts.map((post) => post.category)))
}

