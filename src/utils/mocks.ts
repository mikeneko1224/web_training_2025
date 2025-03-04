import { BannerModel } from '@/models/banner.model'
import { ImageModel } from '@/models/image.model'
import { VolumeModel } from '@/models/volume.model'

export const imageModelMock: ImageModel = {
    src: 'https://placehold.jp/1024x640.png',
    alt: 'image mock',
    width: 1024,
    height: 640,
    url: 'https://placehold.jp/1024x640.png',
}

export const bannerModelMock: (id: number) => BannerModel = (id: number) => ({
    id,
    image: imageModelMock,
})

export const volumeModelMock: (id: number) => VolumeModel = (id: number) => ({
    id,
    name: 'volume mock',
    description: 'description mock',
    catchPhrase: 'catch phrase mock',
    releaseDate: '07.27',
    thumbnail: {
        src: 'https://placehold.jp/482x686.png',
        alt: 'thumbnail mock',
        width: 482,
        height: 686,
        url: 'https://placehold.jp/482x686.png',
    },
})
