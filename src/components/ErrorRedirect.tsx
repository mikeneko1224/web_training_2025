'use client'

import { FC, useEffect } from 'react'
import MyImage from './MyImage'
import { Footer } from './layouts/footer/Footer'
import { Header } from './layouts/header/Header'
import { errorBackground, errorGirl, logo_b } from '@/utils/images'

export const ErrorRedirect: FC = () => {
    useEffect(() => {
        setTimeout(function () {
            window.location.href = '/'
        }, 3 * 1000)
    })

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
                <div className='text-[24px] font-[400]'>
                    このページは存在しません。3秒後にホームに戻ります。
                </div>
                <div className='relative mx-auto'>
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
