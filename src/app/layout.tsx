import './globals.css'
import { Footer } from '@/components/layouts/footer/Footer'
import { Header } from '@/components/layouts/header/Header'

export const metadata = {
    title: 'まんがWeb',
    description: 'まんがWeb',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='ja'>
            <body>
                <header>
                    <div className='h-[26px] bg-black' />
                    <Header />
                </header>
                {children}
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    )
}
