import React, { useEffect, useRef } from 'react'

export default function Modal({
    isOpenModal,
    setIsOpenModal,
}: {
    isOpenModal: boolean
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
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

    useEffect(() => {
        if (isOpenModal) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpenModal])

    const [isOpenModal2, setIsOpenModal2] = React.useState(false)

    const changeModal = () => {
        setIsOpenModal2(true)
        setIsOpenModal(false)
    }

    return (
        <>
            {isOpenModal && (
                <div className='fixed left-0 top-0 z-10 h-full w-full bg-black/50'>
                    <div
                        className='relative left-1/2 top-1/2 z-20 max-h-[95vh] w-1/2 -translate-x-1/2 -translate-y-1/2  overflow-auto rounded-xl  bg-white p-4 shadow-lg md:max-h-[90vh] md:w-1/2 md:p-10 md:pb-20'
                        ref={modalRef}
                    >
                        {/* ここにモーダルの中身 */}
                        <div className='flex  flex-col items-center justify-center gap-7'>
                            <div>ログイン</div>
                            <fieldset className='flex w-full flex-col items-center justify-center gap-4'>
                                <input
                                    type='text'
                                    placeholder='メールアドレス'
                                    className='w-4/5 border-b-2 border-gray-300'
                                />
                                <input
                                    type='password'
                                    placeholder='パスワード'
                                    className='w-4/5 border-b-2 border-gray-300'
                                />
                                <button
                                    type='button'
                                    className='w-4/5 rounded-md bg-yellow-300 py-2'
                                >
                                    ログイン
                                </button>
                            </fieldset>
                            <fieldset className='flex w-full flex-col items-center justify-center gap-3'>
                                <div>アカウントをお持ちでない方</div>
                                <button
                                    type='button'
                                    className='w-4/5 rounded-md border border-gray-300 py-2'
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
