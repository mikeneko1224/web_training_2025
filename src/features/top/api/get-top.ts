import { TopModel, UpdateModel } from '../models/top.model'
import { TopTranslator, TopUpdateTranslator } from './top.translator'
import { apiClient } from '@/api/api-client'
import { Endpoint } from '@/api/endpoint'
import { Proto } from '@/generated/protocol'

const endpoint: Endpoint<Proto.ITopView> = {
    path: 'top',
    method: 'get',
    revalidate: 60,
    decode: (data) => {
        return Proto.TopView.decode(new Uint8Array(data))
    },
}

export const getTop: () => Promise<TopModel> = async () => {
    const data = await apiClient(endpoint)
    return TopTranslator.translate(data)
}

export const getUpdateTop: () => Promise<UpdateModel> = async () => {
    const data = await apiClient(endpoint)
    return TopUpdateTranslator.translate(data)
}
