
import './globals.css'
import type {Metadata} from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'lncln.io',
    description: 'portfolio and development blog',
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Script src="/script.js" data-website-id="2d52ef87-9d7a-4978-84a1-fe3796a529d5"></Script>
        <body className="font-sans">{children}</body>
        </html>
    )
}
