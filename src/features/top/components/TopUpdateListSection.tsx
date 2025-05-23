import React, { FC } from 'react'
import Link from 'next/link'
import { TopSectionContainer } from './layouts/TopSectionContainer'
import { Badge } from '@/components/Badge'
import MyImage from '@/components/MyImage'
import { TitleModel } from '@/models/title.model'

type Props = {
    titles: TitleModel[]
}

export const TopUpdateListSection: FC<Props> = ({ titles }) => {
    return (
        <TopSectionContainer
            headlineText='今日の更新作品'
            hrefText='連載作品一覧へ'
            href='/detail'
        >
            <div className='grid grid-cols-4 gap-[32px]'>
                {titles.map((title) => (
                    <ListRow key={title.id} title={title} />
                ))}
            </div>
        </TopSectionContainer>
    )
}

const ListRow: FC<{ title: TitleModel }> = ({ title }) => {
    return (
        <div className='flex h-[336px] flex-col gap-2'>
            <div className='relative'>
                <MyImage image={title.thumbnail} />
                <Badge />
            </div>
            <div className='flex h-[83px] flex-col gap-[2px]'>
                <h3 className='text-[16px] font-bold text-[#333333]'>
                    {`${title.name} `}
                </h3>
                <h2 className='line-clamp-2 text-[14px] text-[#6B6B6B]'>
                    {`${title.catchPhrase}`}
                </h2>
            </div>
            <div className='flex flex-col gap-2'>
                <Link
                    className='flex justify-center bg-[#F5B437] px-[10px] py-[12px] text-[16px] text-[#FFF]'
                    href={`/title/${title.id}/chapter/${title.firstChapterId}`}
                >
                    読む
                </Link>

                <Link
                    className='flex justify-center bg-[#6FBAF0] px-[10px] py-[12px] text-[16px] text-[#FFF]'
                    href={`/title/${title.id}`}
                >
                    作品詳細
                </Link>
            </div>
        </div>
    )
}
