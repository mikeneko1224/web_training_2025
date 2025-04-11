import { apiClient } from '@/api/api-client'
import { Endpoint } from '@/api/endpoint'

const endpoint: (email: string, password: string) => Endpoint<undefined> = (
    email: string,
    password: string
) => ({
    path: 'user',
    method: 'post',
    revalidate: 0,
    parameters: { email: email, password: password },
    decode: () => undefined,
})

export const Registration: (
    email: string,
    password: string
) => Promise<undefined> = async (email: string, password: string) => {
    return await apiClient(endpoint(email, password), false)
}
