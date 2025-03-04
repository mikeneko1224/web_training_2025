'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import { ImageModel } from '@/models/image.model'
import clsx from 'clsx'

type Props = {
    image: ImageModel
    className?: string
}

const MyImage: FC<Props> = ({ image, className }) => {
    return (
        <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority={image.priority}
            onClick={() => {
                if (image.url) {
                    window.location.href = image.url
                }
            }}
            className={clsx('cursor-pointer', className)}
        />
    )
}

export default MyImage
