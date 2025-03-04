import React from 'react'
import { Divider } from '@/components/Divider'
import { getTop } from '@/features/top/api/get-top'
import { TopCarousel, TopVolumeListSection } from '@/features/top/components'
import { volumeModelMock } from '@/utils/mocks'

const TopPage = async () => {
    const model = await getTop()
    const { banners } = model
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
            <TopVolumeListSection volumes={volumes} />
        </div>
    )
}

export default TopPage
