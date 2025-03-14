import { ImageTranslator } from './image.translator'
import { Proto } from '@/generated/protocol'
import { ChapterModel } from '@/models/chapter.model'
import { PeriodModel } from '@/models/period.model'

export const ChapterTranslator = {
    translate: (proto: Proto.IChapter): ChapterModel => {
        return {
            id: proto.id as number,
            name: proto.name as string,
            subName: proto.name as string,
            period: proto.period as PeriodModel,
            thumbnail: ImageTranslator.translate(
                proto.thumbnail as Proto.IImage
            ),
        }
    },
}
