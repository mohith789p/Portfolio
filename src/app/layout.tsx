import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Portfolio | Potnuru Mohith',
  description: 'A modern portfolio showcasing creative development work and skills',
  keywords: ['portfolio', 'developer', 'designer', 'frontend', 'web development'],
  authors: [{ name: 'Potnuru Mohith' }],
  creator: 'Potnuru Mohith',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-potnuru-mohith.vercel.app',
    title: 'Portfolio | Potnuru Mohith',
    description: 'A modern portfolio showcasing mohith\'s work and skills',
    siteName: 'Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohith | Creative Developer',
    description: 'A modern portfolio showcasing creative development work and skills',
    images: ['/og-image.jpg'],
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}