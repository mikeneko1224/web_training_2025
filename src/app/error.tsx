'use client'

import MyImage from '@/components/MyImage'
import { Footer } from '@/components/layouts/footer/Footer'
import { Header } from '@/components/layouts/header/Header'
import { errorBackground, errorGirl, logo_b } from '@/utils/images'

export default function Error() {
    return (
        <>
            <header>
                <div className='h-[26px] bg-black'>
                    <div className='py-2 pl-[20px]'>
                        <MyImage image={logo_b} />
                    </div>
                </div>
                <Header />
            </header>
            <div className='mx-auto my-[64px] flex flex-col gap-[32px]'>
                <div className='font-[24px]'>
                    エラーが発生しました。時間をおいて再度お試しください。
                </div>
                <div className='relative'>
                    <MyImage image={errorBackground} />
                    <div className='absolute left-1/4 top-[42px] mx-auto'>
                        <MyImage className='' image={errorGirl} />
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
