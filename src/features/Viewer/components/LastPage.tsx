'use client'

import { FC } from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { NextPage } from './NextPage'
import MyImage from '@/components/MyImage'
import {
    GALogo,
    ShareFBIcon2,
    ShareLNIcon2,
    ShareTWIcon2,
    catLogo,
} from '@/utils/images'

type Props = {
    lastpage: number
}

export const LastPage: FC<Props> = ({ lastpage }) => {
    const params = useParams()
    const pathname = usePathname()
    const link = `http://localhost:3000${pathname}`
    const url = `http://twitter.com/share?url=${link}&hashtags=漫画`

    return (
        <div className='mx-auto my-[242px] flex h-[416px] w-[320px] flex-col items-center justify-center bg-white'>
            <div className='my-[20px]'>
                <MyImage image={GALogo} />
            </div>
            <div className='flex flex-col gap-[12px]'>
                <div className='flex flex-col items-center justify-center gap-[8px]'>
                    <button className='px-auto w-[256px] rounded-sm border border-[#D9D9D9] py-[8px]'>
                        <a href={`/title/${params.id}`}>作品詳細</a>
                    </button>
                    <NextPage lastpage={lastpage} />
                    <button className='px-auto w-[256px] rounded-sm border border-[#D9D9D9] bg-[#F9E384] py-[8px]'>
                        感想を書く
                    </button>
                    <button className='px-auto w-[256px] rounded-sm border border-[#D9D9D9] py-[8px]'>
                        <a href={`/title/${params.id}`}>閉じる</a>
                    </button>
                </div>
                <div className='flex gap-[4px]'>
                    <button className='relative h-[36px] w-[82px] rounded-[4px] bg-[#1877F2] text-center'>
                        <MyImage
                            className='absolute inset-x-[33%] inset-y-[5%]'
                            image={ShareFBIcon2}
                        />
                    </button>
                    <button className='relative h-[36px] w-[82px] rounded-[4px] bg-[#1DA1F2] text-center'>
                        <a href={url}>
                            <MyImage
                                className='absolute inset-x-[33%] inset-y-[5%]'
                                image={ShareTWIcon2}
                            />
                        </a>
                    </button>
                    <button className='relative h-[36px] w-[82px] rounded-[4px] bg-[#00B900] text-center'>
                        <MyImage
                            className='absolute inset-x-[33%] inset-y-[5%]'
                            image={ShareLNIcon2}
                        />
                    </button>
                </div>
            </div>
            <div className='pt-[10px]'>
                <MyImage image={catLogo} />
            </div>
        </div>
    )
}
