import '../globals.css'
import MyImage from '@/components/MyImage'
import { Footer } from '@/components/layouts/footer/Footer'
import { Header } from '@/components/layouts/header/Header'
import { logo_b } from '@/utils/images'

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
                    <div className='h-[26px] bg-black'>
                        <div className='py-2 pl-[20px]'>
                            <MyImage image={logo_b} />
                        </div>
                    </div>
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
