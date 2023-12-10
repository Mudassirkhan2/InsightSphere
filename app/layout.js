import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/sidebar/Sidebar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InsightSphere',
  description: 'Admin Dashboard built with Next.js ,Rechart ,MongoDB and TailwindCSS -Mudassir Khan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <div className='flex-1 p-5 bg-softBg'>
            <Sidebar/>
          </div>
          <div className='flex-[4] p-5'>
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
