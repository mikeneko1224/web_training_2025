import { ChapterModel } from '@/models/chapter.model'
import { TitleModel } from '@/models/title.model'

export type TitleDetailModel = {
    title: TitleModel
    chapters: ChapterModel[]
    advertisement: string
}
