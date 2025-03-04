import { Proto } from '@/generated/protocol'
import { ImageModel } from '@/models/image.model'

export const ImageTranslator = {
    translate: (proto: Proto.IImage): ImageModel => {
        return {
            src: proto.src as string,
            alt: proto.alt as string,
            width: proto.width as number,
            height: proto.height as number,
            url: proto.url,
        }
    },
}
