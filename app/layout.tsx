import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { AuthProvider } from '../components/auth-provider'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Shopiko - Your Modern E-commerce Destination',
  description: 'Discover trendy products and amazing deals at Shopiko',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans flex flex-col min-h-screen bg-gray-50`}>
        <AuthProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}

