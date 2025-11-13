import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech Blog - Latest in AI, Web Development & More',
  description: 'Stay updated with the latest news in AI, web development, Python, Node.js, Cursor, and modern technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w, d) {
  try {
      if (w._psp) return;
      var q = function() {
          q.q.push(arguments)
      };
      q.q = [];w._psp = q;var s = d.createElement("script");s.async = 1;s.src = "https://app.prospectory.ai/psp.tracker.prod.js";
      var f = d.getElementsByTagName("script")[0];f.parentNode.insertBefore(s, f);
      s.onload = function() {
          try {
              (w.tracking && w.tracking.load) && w.tracking.load({
                  pspClientId: "cmecxlbwd002zoi25iwbauy09",
                  pspUserId: "cme6szihy0000zxecsgw2wrvw"
              })
          } catch (e) {}
      };
  } catch (e) {}
})(window, document);
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

