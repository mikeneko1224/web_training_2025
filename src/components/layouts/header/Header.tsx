import React, { FC } from 'react'
import { HeaderItemRow } from './HeaderItemRow'
import MyImage from '@/components/MyImage'
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
    return (
        <div className='mx-auto flex max-w-6xl items-center justify-between gap-[50px] py-4'>
            <MyImage image={LogoImage} />
            <div className='flex items-baseline gap-4 whitespace-pre-wrap'>
                {items.map((item, index) => (
                    <HeaderItemRow
                        key={index}
                        image={item.image}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    )
}
