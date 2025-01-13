// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import {config} from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */


import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Script from 'next/script'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'lncln.io',
    description: 'portfolio and development blog',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Script src="https://cloud.umami.is/script.js" data-website-id="3ee7558b-1a42-4190-b237-5ff95c5468d2"></Script>   
        <body className={inter.className}>{children}</body>
        </html>
    )
}
