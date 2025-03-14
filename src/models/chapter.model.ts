import { ImageModel } from './image.model'
import { PeriodModel } from './period.model'

export interface ChapterModel {
    id: number
    name: string
    subName: string
    period: PeriodModel
    thumbnail: ImageModel
}
