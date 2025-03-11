import { BannerModel } from '@/models/banner.model'
import { TitleModel } from '@/models/title.model'
import { VolumeModel } from '@/models/volume.model'

export interface TopModel {
    update: TitleModel[]
    banners: BannerModel[]
    volumes: VolumeModel[]
}
