import { ImageModel } from './image.model'

export interface VolumeModel {
    id: number
    name: string
    description: string
    catchPhrase: string
    releaseDate: string
    thumbnail: ImageModel
}
