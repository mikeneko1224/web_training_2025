import '../globals.css'
import { NewDesign } from '@/components/Change_design'

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='ja'>
            <body>
                <NewDesign>{children}</NewDesign>
            </body>
        </html>
    )
}
