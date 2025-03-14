import { TitleDetailModel } from '../models/titleDetail.model'
import { Proto } from '@/generated/protocol'
import { TitleTranslator } from '@/translators/Update.translator'
import { ChapterTranslator } from '@/translators/chapter.translator'

export const TitleDetailTranslator = {
    translate: (proto: Proto.ITitleDetailView): TitleDetailModel => {
        return {
            title: TitleTranslator.translate(proto.title as Proto.ITitle),

            chapters:
                proto.chapters?.map((banner) =>
                    ChapterTranslator.translate(banner)
                ) ?? [],

            advertisement: proto.advertisement as string,
        }
    },
}
