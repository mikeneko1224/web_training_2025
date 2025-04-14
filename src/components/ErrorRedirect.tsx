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
        }, 5 * 1000)
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
                <div className='font-[24px]'>
                    このページは存在しません。時間をおいて再度お試しください。
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
