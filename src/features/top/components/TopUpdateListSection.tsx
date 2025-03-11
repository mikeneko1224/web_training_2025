import React, { FC } from 'react'
import { TopSectionContainer } from './layouts/TopSectionContainer'
import { Badge } from '@/components/Badge'
import MyImage from '@/components/MyImage'
import { TitleModel } from '@/models/title.model'

type Props = {
    volumes: TitleModel[]
}

export const TopUpdateListSection: FC<Props> = ({ volumes }) => {
    return (
        <TopSectionContainer
            headlineText='今日の更新作品'
            hrefText='連載作品一覧へ'
            href='/update'
        >
            <div className='grid grid-cols-4 gap-[32px]'>
                {volumes.map((volume) => (
                    <ListRow key={volume.id} volume={volume} />
                ))}
            </div>
        </TopSectionContainer>
    )
}

const ListRow: FC<{ volume: TitleModel }> = ({ volume }) => {
    return (
        <div className='flex h-[336px] flex-col gap-2'>
            <div className='relative'>
                <MyImage image={volume.thumbnail} />
                <Badge />
            </div>
            <div className='flex h-[83px] flex-col gap-[2px]'>
                <h3 className='text-[16px] font-bold text-[#333333]'>
                    {`${volume.name} `}
                </h3>
                <h2 className='line-clamp-2 text-[14px] text-[#6B6B6B]'>
                    {`${volume.catchPhrase}`}
                </h2>
            </div>
            <div className='flex flex-col gap-2'>
                <button className='bg-[#F5B437] px-[10px] py-[12px] text-[16px] text-[#FFF]'>
                    読む
                </button>
                <button className='bg-[#6FBAF0] px-[10px] py-[12px] text-[16px] text-[#FFF] '>
                    作品詳細
                </button>
            </div>
        </div>
    )
}
