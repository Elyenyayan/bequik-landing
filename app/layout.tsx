import type { Metadata } from 'next'
import './globals.css'  // This should work without TypeScript errors in Next.js

export const metadata: Metadata = {
  title: 'BeQuik Information Solutions',
  description: 'Enterprise-grade colocation & infrastructure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}