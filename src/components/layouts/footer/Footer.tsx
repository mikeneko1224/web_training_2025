import React, { FC } from 'react'
import MyImage from '@/components/MyImage'
import {
    ChevronRightBlackIcon,
    JasracIcon,
    ShareFBIcon,
    ShareLNIcon,
    ShareTWIcon,
} from '@/utils/images'

const FooterItem: FC<{ title: string }> = ({ title }) => {
    console.log("こんにちは");
    return (
        <td className='flex w-64 flex-row-reverse border-b border-r border-white px-3 py-4 text-right text-xs'>
            <MyImage image={ChevronRightBlackIcon} className='ml-2' />
            {title}
        </td>
    )
}

export const Footer: FC = () => {
    return (
        <div>
            <div className='flex flex-col items-center bg-[#E8E8E8]'>
                <table>
                    <tbody>
                        <tr className='flex'>
                            <FooterItem title='SQUARE ENIX マガジン＆ブック' />
                            <FooterItem title='月刊少年ガンガン' />
                            <FooterItem title='月間Gファンタジー' />
                            <FooterItem title='ヤングガンガン' />
                        </tr>
                        <tr className='flex'>
                            <FooterItem title='月刊ガンガンJOKER' />
                            <FooterItem title='月刊ビックガンガン' />
                            <FooterItem title='マンガUP！' />
                            <FooterItem title='ガンガンpixiv' />
                        </tr>
                        <tr className='flex'>
                            <FooterItem title='SQEXノベル' />
                            <FooterItem title='アニメ・実写情報' />
                            <FooterItem title='出版部門・採用情報' />
                            <FooterItem title='SQUARE ENIX MEMBER' />
                        </tr>
                    </tbody>
                </table>
                <div className='flex gap-2 py-3'>
                    <MyImage image={JasracIcon} />
                    <p className='mt-1 text-[10px] text-[#6B6B6B]'>
                        JASRAC許諾
                        <br />
                        第9006541165Y38029号
                    </p>
                </div>
            </div>

            <div className='flex flex-col items-center gap-2 bg-black pb-5'>
                <p className='py-3 text-center text-[10px] text-white'>
                    ABJマークは、この電子書店・電子書籍配信サービスが、著作権者からコンテンツ使用許諾を得た正規版配信サービスであることを示す登録商標(登録番号
                    第6091713号)です。
                </p>
                <div className='flex gap-1'>
                    <MyImage image={ShareFBIcon} />
                    <MyImage image={ShareTWIcon} />
                    <MyImage image={ShareLNIcon} />
                </div>
                <div className='flex gap-2 text-center text-[10px] text-white'>
                    <p>著作権について</p>
                    <p>プライバシーポリシー</p>
                    <p>サポートセンター</p>
                </div>
                <p className='text-center text-[9px] text-white'>
                    本サイトの掲載作品はすべてフィクションです。実在の人物・団体・事件等には一切関係ありません。
                    <br />
                    本サイト上に掲載の文章、画像、写真などを無断で複製することは法律で禁じられています。全ての著作権は株式会社スクウェア・エニックスに帰属します。
                    <br />
                    All rights Reserved. No reproduction or republication
                    without written permission.
                </p>
                <p className='text-center text-[10px] text-white'>
                    © 2023 SQUARE ENIX CO., LTD. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}
