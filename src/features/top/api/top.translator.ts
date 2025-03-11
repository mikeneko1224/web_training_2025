import { TopModel } from '../models/top.model'
import { Proto } from '@/generated/protocol'
import { TitleTranslator } from '@/translators/Update.translator'
import { VolumeTranslator } from '@/translators/Volume.translator'
import { BannerTranslator } from '@/translators/banner.translator'

export const TopTranslator = {
    translate: (proto: Proto.ITopView): TopModel => {
        return {
            banners:
                proto.banners?.map((banner) =>
                    BannerTranslator.translate(banner)
                ) ?? [],
            update:
                proto.updateTitles?.map((banner) =>
                    TitleTranslator.translate(banner)
                ) ?? [],
            volumes:
                proto.newVolumes?.map((banner) =>
                    VolumeTranslator.translate(banner)
                ) ?? [],
        }
    },
}
