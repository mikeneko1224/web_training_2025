import { TopModel, UpdateModel } from '../models/top.model'
import { Proto } from '@/generated/protocol'
import { UpdateTranslator } from '@/translators/Update.translator'
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

export const TopUpdateTranslator = {
    translate: (proto: Proto.ITopView): UpdateModel => {
        return {
            Update:
                proto.updateTitles?.map((banner) =>
                    UpdateTranslator.translate(banner)
                ) ?? [],
        }
    },
}
