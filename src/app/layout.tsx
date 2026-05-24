import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import SessionProvider from '@/components/SessionProvider'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Tether',
    description: 'Built with Next.js, NextAuth, and Prisma',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={geist.className}>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </body>
        </html>
    )
}