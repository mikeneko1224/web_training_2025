import Header from '@/features/Viewer/components/header'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='ja'>
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
