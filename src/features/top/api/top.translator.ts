import { TopModel } from '../models/top.model'
import { Proto } from '@/generated/protocol'
import { BannerTranslator } from '@/translators/banner.translator'

export const TopTranslator = {
    translate: (proto: Proto.ITopView): TopModel => {
        return {
            banners:
                proto.banners?.map((banner) =>
                    BannerTranslator.translate(banner)
                ) ?? [],
        }
    },
}
