import { NextApiRequest } from 'next'
import { TitleDetailModel } from '../models/titleDetail.model'
import { TitleDetailTranslator } from './titleDetail.translator'
import { apiClient } from '@/api/api-client'
import { Endpoint } from '@/api/endpoint'
import { Proto } from '@/generated/protocol'

const endpoint: (id: number) => Endpoint<Proto.ITitleDetailView> = (
    id: number
) => ({
    path: 'title/detail',
    method: 'get',
    revalidate: 60,
    parameters: { title_id: id },
    decode: (data) => {
        return Proto.TitleDetailView.decode(new Uint8Array(data))
    },
})

export const getTitleDetail: (id: number) => Promise<TitleDetailModel> = async (
    id: number
) => {
    const data = await apiClient(endpoint(id))
    return TitleDetailTranslator.translate(data)
}
