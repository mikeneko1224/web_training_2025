import { AuthorModel } from './author.model'
import { ImageModel } from './image.model'
import { VolumeModel } from './volume.model'

export interface TitleModel {
    id: number
    name: string
    description: string
    catchPhrase: string
    copyRight: string
    thumbnail: ImageModel
    volume: VolumeModel
    relatedVolume: VolumeModel
    badge: 'NONE' | 'NEW'
    author: AuthorModel
    firstChapterId: number
}
