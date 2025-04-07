'use client'

import React, { FC, useState } from 'react'
import { HeaderItemRow } from './HeaderItemRow'
import MyImage from '@/components/MyImage'
import Modal from '@/features/top/components/Modal'
import { ImageModel } from '@/models/image.model'
import {
    BookClosedFillIcon,
    BookFillIcon,
    BookShioriIcon,
    CrownFillIcon,
    EnvelopeFillIcon,
    GanganGa,
    GanganPixiv,
    LogoImage,
    MagnifyingGlassIcon,
    login,
} from '@/utils/images'

const items: { image: ImageModel; title: string }[] = [
    { image: login, title: 'ログイン' },
    { image: BookFillIcon, title: '連載' },
    { image: BookShioriIcon, title: '連載終了' },
    { image: BookClosedFillIcon, title: '単行本' },
    { image: CrownFillIcon, title: '新人賞\n持ち込み' },
    { image: EnvelopeFillIcon, title: 'お問い\n合わせ' },
    { image: MagnifyingGlassIcon, title: '検索' },
    { image: GanganPixiv, title: 'ガンガン\npixiv' },
    { image: GanganGa, title: 'ガンガン\nGA' },
]

export const Header: FC = () => {
    const [isOpenModal, setIsOpenModal] = React.useState(false)
    const [authMode, setAuthMode] = useState('login')

    const switchAuthMode = () => {
        setAuthMode(authMode === 'login' ? 'register' : 'login')
    }

    const OpenModal = () => {
        setIsOpenModal(true)
    }

    return (
        <>
            <div className='mx-auto flex max-w-6xl items-center justify-between gap-[50px] py-4'>
                <MyImage image={LogoImage} />
                <div className='flex items-baseline gap-4 whitespace-pre-wrap'>
                    {items.map((item, index) => (
                        <HeaderItemRow
                            key={index}
                            image={item.image}
                            title={item.title}
                            openModal={
                                item.title === 'ログイン'
                                    ? OpenModal
                                    : undefined
                            }
                        />
                    ))}
                </div>
            </div>

            <Modal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                authModal={switchAuthMode}
                authMode={authMode}
            />
        </>
    )
}
