import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation/Navigation'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Moonrise - Professional Makeup Services',
  description: 'Professional makeup services for all occasions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
