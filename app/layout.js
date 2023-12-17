import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/sidebar/Sidebar'
import Footer from '@/components/layout/Footer'
import SidebarMobile from '@/components/layout/sidebar/SidebarMobile'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InsightSphere',
  description: 'Admin Dashboard built with Next.js ,Rechart ,MongoDB and TailwindCSS -Mudassir Khan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='relative flex min-h-screen'>
          <div className='flex-1 hidden min-h-screen p-5 xl:block softBg'>
            <Sidebar/>
          </div>
          <div className='flex-[6] xl:flex-[5] p-4 lg:p-5'>
            <Navbar/>
            {children}
            <Footer/>
            <div className='fixed bottom-0 z-30 w-full softBg md:hidden '>
              <SidebarMobile/>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
