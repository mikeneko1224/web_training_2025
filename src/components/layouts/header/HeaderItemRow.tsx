'use client'

import React, { FC } from 'react'
import MyImage from '@/components/MyImage'
import Modal from '@/features/top/components/Modal'
import { ImageModel } from '@/models/image.model'

type Props = {
    image: ImageModel
    title: string
}

export const HeaderItemRow: FC<Props> = ({ image, title }) => {
    const [isOpenModal, setIsOpenModal] = React.useState(false)
    return title === 'ログイン' ? (
        <div className='flex w-[76px] flex-col items-center gap-1.5'>
            <button onClick={() => setIsOpenModal(true)}>
                <MyImage image={image} />
                <p className='text-center text-[13px] text-[#6B6B6B]'>
                    {title}
                </p>
            </button>
            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
        </div>
    ) : (
        <div className='flex w-[76px] flex-col items-center gap-1.5'>
            <MyImage image={image} />
            <p className='text-center text-[13px] text-[#6B6B6B]'>{title}</p>
        </div>
    )
}
