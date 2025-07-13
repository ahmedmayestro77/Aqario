import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
// Removed ThemeProvider import

export const metadata: Metadata = {
  title: "عقاريو | بِع عقارك بسرعة وأمان",
  description: "عقاريو هي منصة ذكية لبيع العقارات في مصر بسرعة وأمان وبدون عمولة مقدمة.",
  keywords: "عقارات, بيع شقة, بيع عقار, عقاريو, تسويق عقاري, عقارات مصر",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "عقاريو | بِع عقارك بسرعة وأمان",
    description: "بيع عقارك في مصر بسهولة وسرعة مع عقاريو، وبدون عمولة مقدمة.",
    images: ["https://aqario.netlify.app/og-image.jpg"],
    url: "https://aqario.netlify.app",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://aqario.netlify.app",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts (Cairo & Inter) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>
        {/* Removed ThemeProvider wrapper */}
        {children}
      </body>
    </html>
  )
}
