import { ImageTranslator } from './image.translator'
import { Proto } from '@/generated/protocol'
import { BannerModel } from '@/models/banner.model'

export const BannerTranslator = {
    translate: (proto: Proto.IBanner): BannerModel => {
        return {
            id: proto.id as number,
            image: ImageTranslator.translate(proto.image as Proto.IImage),
        }
    },
}
