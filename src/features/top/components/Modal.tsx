'use client'

import React, { useEffect, useRef } from 'react'

export default function Modal({
    isOpenModal,
    setIsOpenModal,
    openRegisterModal,
}: {
    isOpenModal: boolean
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    openRegisterModal?: () => void
}) {
    // モーダル外をクリックした時の処理
    const modalRef = useRef(null)
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                modalRef.current &&
                !(modalRef.current as HTMLElement).contains(
                    event.target as Node
                )
            ) {
                setIsOpenModal(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [modalRef, setIsOpenModal])

    // モーダル表示中: 背面のスクロールを禁止
    useEffect(() => {
        if (isOpenModal) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpenModal])

    return (
        <>
            {isOpenModal && (
                <div className='fixed left-0 top-0 z-10 h-full w-full bg-black/50 '>
                    <div
                        className='relative top-1/4 z-20 mx-auto w-[540px] rounded-[4px]  bg-white px-[32px] pb-[48px] pt-[32px]'
                        ref={modalRef}
                    >
                        {/* ここにモーダルの中身 */}
                        <div className='flex  flex-col items-center justify-center gap-8 '>
                            <div className='text-[20px] font-[700]'>
                                ログイン
                            </div>
                            <fieldset className='flex w-full flex-col items-center justify-center gap-4'>
                                <input
                                    type='text'
                                    placeholder='メールアドレス'
                                    className='w-[100%] border-b-2 border-gray-300'
                                />
                                <input
                                    type='password'
                                    placeholder='パスワード'
                                    className='w-[100%] border-b-2 border-gray-300'
                                />
                                <button
                                    type='button'
                                    className='w-[100%] rounded-md bg-yellow-300 py-2'
                                >
                                    ログイン
                                </button>
                            </fieldset>
                            <fieldset className='flex w-full flex-col items-center justify-center gap-2'>
                                <div>アカウントをお持ちでない方</div>
                                <button
                                    type='button'
                                    className='w-[100%] rounded-md border border-gray-300 py-2 text-[16px] font-[600]'
                                    onClick={openRegisterModal}
                                >
                                    新規登録
                                </button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
