import React from 'react'
import { cookies } from 'next/dist/client/components/headers'
import { Divider } from '@/components/Divider'
import { getTop } from '@/features/top/api/get-top'
import {
    TopCarousel,
    TopUpdateListSection,
    TopVolumeListSection,
} from '@/features/top/components'

const TopPage = async () => {
    const model = await getTop()
    const { banners, update, volumes } = model

    return (
        <div className='flex flex-col gap-2 pb-9'>
            <TopCarousel banners={banners} />
            <Divider />
            <TopUpdateListSection titles={update} />
            <Divider />
            <TopVolumeListSection volumes={volumes} />
        </div>
    )
}

export default TopPage
