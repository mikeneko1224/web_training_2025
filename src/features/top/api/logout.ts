import { apiClient } from '@/api/api-client'
import { Endpoint } from '@/api/endpoint'

const endpoint: () => Endpoint<undefined> = () => ({
    path: 'logout',
    method: 'delete',
    revalidate: 0,
    decode: () => undefined,
})

export const LogoutAPI: () => Promise<undefined> = async () => {
    return await apiClient(endpoint(), true)
}
