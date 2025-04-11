import React, { FC, useState } from 'react'
import { cookies } from 'next/dist/client/components/headers'
import MyImage from '@/components/MyImage'
import { ImageModel } from '@/models/image.model'
import { Logout } from '@/utils/images'

type Props = {
    image: ImageModel
    title: string
    openModal?: () => void
    LoggedIn: boolean
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeaderItemRow: FC<Props> = ({
    image,
    title,
    openModal,
    LoggedIn,
    setLoggedIn,
}) => {
    //ログアウトボタンアクション
    const LogoutAction = async () => {
        try {
            await fetch(`/api/logout`, {
                method: 'delete',
            })
            alert('ログアウトしました')
            setLoggedIn(false)
        } catch (error) {
            alert(error)
        }
    }

    return LoggedIn && title === 'ログイン' ? (
        <button
            className='flex w-[76px] flex-col items-center gap-1.5'
            onClick={LogoutAction}
        >
            <MyImage image={Logout} />
            <p className='text-center text-[13px] text-[#6B6B6B]'>ログアウト</p>
        </button>
    ) : (
        <button
            className='flex w-[76px] flex-col items-center gap-1.5'
            onClick={openModal}
        >
            {title === 'ログイン' && (
                <div className='flex w-[76px] flex-col items-center gap-1.5'>
                    <MyImage image={image} />
                    <p className='text-center text-[13px] text-[#6B6B6B]'>
                        {title}
                    </p>
                </div>
            )}

            {title !== 'ログイン' && (
                <div className='flex w-[76px] flex-col items-center gap-1.5'>
                    <MyImage image={image} />
                    <p className='text-center text-[13px] text-[#6B6B6B]'>
                        {title}
                    </p>
                </div>
            )}
        </button>
    )
}
