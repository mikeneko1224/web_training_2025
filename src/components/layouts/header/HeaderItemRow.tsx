'use client'

import React, { FC } from 'react'
import MyImage from '@/components/MyImage'
import Modal from '@/features/top/components/Modal'
import { ImageModel } from '@/models/image.model'

type Props = {
    image: ImageModel
    title: string
    openModal?: () => void
}

export const HeaderItemRow: FC<Props> = ({ image, title, openModal }) => {
    return (
        <button
            className='flex w-[76px] flex-col items-center gap-1.5'
            onClick={openModal}
        >
            <MyImage image={image} />
            <p className='text-center text-[13px] text-[#6B6B6B]'>{title}</p>
        </button>
    )
}
