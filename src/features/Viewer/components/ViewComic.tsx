'use client'

import { FC } from 'react'
import MyImage from '@/components/MyImage'
import { ImageModel } from '@/models/image.model'
import { Image, MultipleImage, Viewer } from '@link-u/ginzan'

type Props = {
    pages: ImageModel[]
}

const translate_image = ({ pages }: Props) => {
    let mangaImage!: Image
    const mangaImages: Image[] = []
    let image_src

    pages.map((page) => {
        image_src = page.src
        mangaImage = { type: 'image', src: image_src }
        mangaImages.push(mangaImage)
    })

    return mangaImages
}

export const ViewComic: FC<Props> = ({ pages }) => {
    const images = translate_image({ pages })

    return (
        <div>
            <Viewer src={images} beginWithBlankPage={true} />
        </div>
    )
}
