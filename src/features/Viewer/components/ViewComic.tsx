import { FC } from 'react'
import MyImage from '@/components/MyImage'
import { ImageModel } from '@/models/image.model'

type Props = {
    pages: ImageModel[]
}

export const ViewComic: FC<Props> = ({ pages }) => {
    console.log(pages)

    return <div>ああ</div>
}
