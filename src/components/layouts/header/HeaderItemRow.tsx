'use client'

import React, { FC } from 'react'
import MyImage from '@/components/MyImage'
import Modal from '@/features/top/components/Modal'
import NewRegistrationModal from '@/features/top/components/NewRegistrationModal'
import { ImageModel } from '@/models/image.model'

type Props = {
    image: ImageModel
    title: string
}

export const HeaderItemRow: FC<Props> = ({ image, title }) => {
    const [isOpenModal, setIsOpenModal] = React.useState(false)
    const [isOpenModal2, setIsOpenModal2] = React.useState(false)
    return title === 'ログイン' ? (
        <button
            onClick={() => setIsOpenModal(true)}
            className='flex w-[76px] flex-col items-center gap-1.5'
        >
            <MyImage image={image} />
            <p className='text-center text-[13px] text-[#6B6B6B]'>{title}</p>
            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
            <NewRegistrationModal
                isOpenModal2={isOpenModal2}
                setIsOpenModal2={setIsOpenModal2}
            />
        </button>
    ) : (
        <div className='flex w-[76px] flex-col items-center gap-1.5'>
            <MyImage image={image} />
            <p className='text-center text-[13px] text-[#6B6B6B]'>{title}</p>
        </div>
    )
}
