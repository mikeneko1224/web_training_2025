import { ImageTranslator } from './image.translator'
import { Proto } from '@/generated/protocol'
import { VolumeModel } from '@/models/volume.model'

export const VolumeTranslator = {
    translate: (proto: Proto.IVolume): VolumeModel => {
        return {
            id: proto.id as number,
            name: proto.name as string,
            description: proto.description as string,
            catchPhrase: proto.catchPhrase as string,
            releaseDate: proto.releaseDate as string,
            thumbnail: ImageTranslator.translate(
                proto.thumbnail as Proto.IImage
            ),
        }
    },
}
