import React, { FC } from 'react'
import MyImage from '@/components/MyImage'
import { ChapterModel } from '@/models/chapter.model'

type Props = {
    advertisement: string
}

export const Information: FC<Props> = ({ advertisement }) => {
    return (
        <div className='mx-auto flex max-w-5xl flex-col gap-[12px] py-[32px]'>
            <div className='text-[22px] font-[700]'>作品インフォメーション</div>

            <div className='font-[700] text-[#6B6B6B]'> {advertisement} </div>
        </div>
    )
}
