# TechBlog - Next.js Blogging Website

A modern, responsive blogging website built with Next.js 14, TypeScript, and Tailwind CSS. This project is designed for testing web tracking features across multiple pages on Vercel.

## Features

- 🏠 **Home Page** - Featured articles and category overview
- 📝 **Blog Listing** - Browse all articles with category filtering
- 📄 **Individual Blog Posts** - Dynamic routing for each article
- ℹ️ **About Page** - Information about the blog
- 📧 **Contact Page** - Contact form (frontend only)
- 🎨 **Modern UI** - Responsive design with Tailwind CSS
- 🔍 **SEO Friendly** - Optimized for search engines
- ⚡ **Fast Performance** - Built with Next.js App Router

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
testwebpage/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx      # Individual blog post pages
│   │   └── page.tsx           # Blog listing page
│   ├── about/
│   │   └── page.tsx           # About page
│   ├── contact/
│   │   └── page.tsx           # Contact page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   └── not-found.tsx           # 404 page
├── components/
│   ├── Navigation.tsx          # Navigation component
│   └── Footer.tsx              # Footer component
├── lib/
│   └── blogData.ts             # Blog posts data
└── public/                     # Static assets
```

## Blog Content

The blog includes sample articles covering:
- Artificial Intelligence (AI)
- Web Development
- Python Programming
- Node.js Development
- Development Tools (Cursor IDE)

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live!

### Manual Deployment

```bash
npm install -g vercel
vercel
```

## Web Tracking

This website is designed for testing web tracking features across multiple pages. You can integrate tracking scripts (Google Analytics, Matomo, etc.) in the `app/layout.tsx` file.

## Customization

### Adding New Blog Posts

Edit `lib/blogData.ts` and add new posts to the `blogPosts` array.

### Changing Colors

Modify the theme colors in `tailwind.config.js`.

### Adding Pages

Create new directories in the `app/` folder following Next.js App Router conventions.

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please open an issue on GitHub.
