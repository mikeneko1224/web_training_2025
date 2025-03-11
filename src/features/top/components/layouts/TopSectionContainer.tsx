import React, { FC } from 'react'
import Link from 'next/link'
import MyImage from '@/components/MyImage'
import { ChevronRightIcon } from '@/utils/images'

type Props = {
    headlineText: string
    hrefText: string
    href: string
    children: React.ReactNode
}

export const TopSectionContainer: FC<Props> = ({
    headlineText,
    hrefText,
    href,
    children,
}) => {
    return (
        <div className='mx-auto flex max-w-5xl flex-col gap-3 py-[48px]'>
            <div className='flex items-center justify-between'>
                <h2 className='text-[24px] font-semibold text-[#333333]'>
                    {headlineText}
                </h2>
                <Link href={href}>
                    <div className='flex items-center gap-1'>
                        <p className='text-[17px] font-medium text-[#AEADAD]'>
                            {hrefText}
                        </p>
                        <MyImage image={ChevronRightIcon} />
                    </div>
                </Link>
            </div>
            {children}
        </div>
    )
}
