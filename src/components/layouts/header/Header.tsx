'use client'

import React, { FC, useState } from 'react'
import { HeaderItemRow } from './HeaderItemRow'
import MyImage from '@/components/MyImage'
import { LogoutAPI } from '@/features/top/api/logout'
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
    Logout,
    MagnifyingGlassIcon,
    login,
} from '@/utils/images'
import useIsLog from '@/utils/isLogin'

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
    const [isLoggedIn, setLoggedIn] = useIsLog()

    const switchAuthMode = () => {
        setAuthMode(authMode === 'login' ? 'register' : 'login')
    }

    const OpenModal = () => {
        setIsOpenModal(true)
    }

    //ログアウトボタンアクション
    const LogoutAction = async () => {
        try {
            await LogoutAPI()
            alert('ログアウトしました')
            setLoggedIn(false)
        } catch (error) {
            alert(error)
        }
    }

    const logputImage = Logout

    return (
        <>
            <div className='mx-auto flex max-w-6xl items-center justify-between gap-[50px] py-4'>
                <MyImage image={LogoImage} />
                <div className='flex items-baseline gap-4 whitespace-pre-wrap'>
                    {items.map((item, index) => (
                        <HeaderItemRow
                            key={index}
                            image={
                                item.title === 'ログイン'
                                    ? isLoggedIn
                                        ? logputImage
                                        : item.image
                                    : item.image
                            }
                            title={
                                item.title === 'ログイン'
                                    ? isLoggedIn
                                        ? 'ログアウト'
                                        : item.title
                                    : item.title
                            }
                            openModal={
                                item.title === 'ログイン'
                                    ? !isLoggedIn
                                        ? OpenModal
                                        : LogoutAction
                                    : undefined
                            }
                        />
                    ))}
                </div>
            </div>

            <Modal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                switchAuthMode={switchAuthMode}
                authMode={authMode}
                setLoggedIn={setLoggedIn}
            />
        </>
    )
}
