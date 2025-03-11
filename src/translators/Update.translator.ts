import { ImageTranslator } from './image.translator'
import { Proto } from '@/generated/protocol'
import { AuthorModel } from '@/models/author.model'
import { TitleModel } from '@/models/title.model'
import { VolumeModel } from '@/models/volume.model'

export const UpdateTranslator = {
    translate: (proto: Proto.ITitle): TitleModel => {
        return {
            id: proto.id as number,
            name: proto.name as string,
            description: proto.description as string,
            catchPhrase: proto.catchPhrase as string,
            copyRight: proto.copyRight as string,
            thumbnail: ImageTranslator.translate(
                proto.thumbnail as Proto.IImage
            ),
            volume: proto.volume as VolumeModel,
            relatedVolume: proto.relatedVolume as VolumeModel,
            badge: proto.badge == 1 ? 'NEW' : 'NONE',
            author: proto.author as AuthorModel,
            firstChapterId: proto.firstChapterId as number,
        }
    },
}
