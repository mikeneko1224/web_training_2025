import React, { FC } from 'react'
import { TopSectionContainer } from './layouts/TopSectionContainer'
import MyImage from '@/components/MyImage'
import { VolumeModel } from '@/models/volume.model'

type Props = {
    volumes: VolumeModel[]
}

export const TopVolumeListSection: FC<Props> = ({ volumes }) => {
    return (
        <TopSectionContainer
            headlineText='新作コミック・ノベルズ'
            hrefText='単行本一覧へ'
            href='/volume'
        >
            <div className='flex gap-5'>
                {volumes.map((volume) => (
                    <ListRow key={volume.id} volume={volume} />
                ))}
            </div>
        </TopSectionContainer>
    )
}

const ListRow: FC<{ volume: VolumeModel }> = ({ volume }) => {
    return (
        <div className='flex flex-col gap-2'>
            <MyImage image={volume.thumbnail} />
            <h3 className='text-[16px] font-bold text-[#333333]'>
                {`${volume.releaseDate} 発売`}
            </h3>
        </div>
    )
}
