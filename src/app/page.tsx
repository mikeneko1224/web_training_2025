import React from 'react'
import { Divider } from '@/components/Divider'
import { getTop } from '@/features/top/api/get-top'
import { getUpdateTop } from '@/features/top/api/get-top'
import {
    TopCarousel,
    TopUpdateListSection,
    TopVolumeListSection,
} from '@/features/top/components'
import { volumeModelMock } from '@/utils/mocks'

const TopPage = async () => {
    const model = await getTop()
    const updatemodel = await getUpdateTop()
    const { banners } = model
    const { Update } = updatemodel

    const volumes = [
        volumeModelMock(1),
        volumeModelMock(2),
        volumeModelMock(3),
        volumeModelMock(4),
    ]
    return (
        <div className='flex flex-col gap-2 pb-9'>
            <TopCarousel banners={banners} />
            <Divider />
            <TopUpdateListSection volumes={Update} />
            <Divider />
            <TopVolumeListSection volumes={volumes} />
        </div>
    )
}

export default TopPage
