import { NextApiRequest } from 'next'
import { ViewerModel } from '../models/viewer.model'
import { ViewerTranslator } from './viewer.translaor'
import { apiClient } from '@/api/api-client'
import { Endpoint } from '@/api/endpoint'
import { Proto } from '@/generated/protocol'

const endpoint: (id: number) => Endpoint<Proto.IViewerView> = (id: number) => ({
    path: 'title/viewer',
    method: 'get',
    revalidate: 60,
    parameters: { chapter_id: id },
    decode: (data) => {
        return Proto.ViewerView.decode(new Uint8Array(data))
    },
})

export const getViewer: (id: number) => Promise<ViewerModel> = async (
    id: number
) => {
    console.log(id)
    const data = await apiClient(endpoint(id))
    return ViewerTranslator.translate(data)
}
