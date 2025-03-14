'use client'

import React, { FC } from 'react'
import { usePathname } from 'next/navigation'
import MyImage from '@/components/MyImage'
import { TitleModel } from '@/models/title.model'
import {
    Iconmonstr,
    ShareFBIcon2,
    ShareLNIcon2,
    ShareTWIcon2,
} from '@/utils/images'

type Props = {
    title: TitleModel
}

export const CommicSummary: FC<Props> = ({ title }) => {
    const pathname = usePathname()
    const link = `http://localhost:3000${pathname}`
    const url = `http://twitter.com/share?url=${link}&text=${title.name}&hashtags=漫画`

    return (
        <div className='flex justify-center gap-[32px] bg-[#F5F5F5] py-[24px]'>
            <div className=''>
                <MyImage image={title.thumbnail} />
            </div>
            <div className='flex w-[498px] flex-col gap-[20px]'>
                <div className='text-[24px]'>{`${title.name} `}</div>
                <div>{`${title.description} `}</div>
                <div>
                    <div className='text-[#6B6B6B]'>{`${title.author.name} `}</div>
                    <div className='text-[#6B6B6B]'>{`${title.copyRight} `}</div>
                </div>
                <div className='flex flex-col gap-[12px]'>
                    <div className='flex justify-center gap-[8px] bg-[#FFF] py-[16px]'>
                        <MyImage image={Iconmonstr} />
                        <button>感想を送る</button>
                    </div>
                    <div className='flex gap-[8px]'>
                        <button className='relative h-[44px] w-[160px] rounded-[4px] bg-[#1877F2] text-center'>
                            <MyImage
                                className='absolute inset-x-[40%] inset-y-[15%]'
                                image={ShareFBIcon2}
                            />
                        </button>
                        <button className='relative h-[44px] w-[160px] rounded-[4px] bg-[#1DA1F2] text-center'>
                            <a
                                href={url}
                                target='_blank'
                                rel='nofollow noopener noreferrer'
                            >
                                <MyImage
                                    className='absolute inset-x-[40%] inset-y-[15%]'
                                    image={ShareTWIcon2}
                                />
                            </a>
                        </button>
                        <button className='relative h-[44px] w-[160px] rounded-[4px] bg-[#00B900] text-center'>
                            <MyImage
                                className='absolute inset-x-[40%] inset-y-[15%]'
                                image={ShareLNIcon2}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
