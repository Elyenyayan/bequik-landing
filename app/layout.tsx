import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BeQuik Information Solutions',
  description: 'Enterprise-grade colocation & infrastructure built for uptime',
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