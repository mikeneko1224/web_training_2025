'use client'

import { FC } from 'react'
import { LastPage } from './LastPage'
import MyImage from '@/components/MyImage'
import { ImageModel } from '@/models/image.model'
import { GALogo, catLogo } from '@/utils/images'
import { EmbeddedElement, Image, MultipleImage, Viewer } from '@link-u/ginzan'

type Props = {
    pages: ImageModel[]
    lastpage: number
}

export const ViewComic: FC<Props> = ({ pages, lastpage }) => {
    const mangaImage: Image[] = pages.map((page) => {
        return { type: 'image', src: page.src }
    })

    const lastPage: EmbeddedElement = {
        type: 'embedded_element',
        element: <LastPage lastpage={lastpage} />,
    }

    return <Viewer src={[...mangaImage, lastPage]} beginWithBlankPage={false} />
}
