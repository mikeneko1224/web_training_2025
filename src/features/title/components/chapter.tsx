import React, { FC } from 'react'
import MyImage from '@/components/MyImage'
import { ChapterModel } from '@/models/chapter.model'

type Props = {
    chapters: ChapterModel[]
}

export const Chapter: FC<Props> = ({ chapters }) => {
    return (
        <div className='mx-auto flex max-w-5xl flex-col justify-center gap-[12px] py-[32px]'>
            <div className='text-[24px] font-[600]'>チャプター</div>
            <div className='flex flex-col gap-[24px]'>
                {chapters.map((chapter) => (
                    <ListRow key={chapter.id} chapter={chapter} />
                ))}
            </div>
        </div>
    )
}

const ListRow: FC<{ chapter: ChapterModel }> = ({ chapter }) => {
    return (
        <div className='flex gap-[20px]'>
            <div>
                <MyImage className='w-[326px]' image={chapter.thumbnail} />
            </div>
            <div className='gap-[4px]'>
                <div className='text-[20px] font-[700]'>{chapter.name}</div>
                <div className='text-[18px]'>{chapter.subName}</div>
            </div>
        </div>
    )
}
