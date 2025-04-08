import { Maintenance, NetworkError, NotFound, ServerError } from './api-error'
import { Endpoint } from './endpoint'

export const apiClient = async <Response>(
    endpoint: Endpoint<Response>
): Promise<Response> => {
    const domain = process.env.NEXT_PUBLIC_API_DOMAIN
    const parameters = Object.entries(endpoint.parameters || {})
        .map((entry) => (entry[1] ? `${entry[0]}=${entry[1]}` : undefined))
        .filter((i) => i)
        .join('&')
    const url = `${domain}api/v1/${endpoint.path}${
        parameters ? `?${parameters}` : ''
    }`

    const response = await fetch(url, {
        method: endpoint.method,
        credentials: endpoint.credentials,
        next: {
            revalidate: endpoint.revalidate,
        },
    })

    type ErrorMap = {
        [key: string]: (() => never) | undefined
    }

    const errorMap: ErrorMap = {
        '404': () => {
            throw new NotFound()
        },
        '500': () => {
            throw new ServerError()
        },
        '503': () => {
            throw new Maintenance()
        },
    }

    errorMap[String(response.status)]?.()

    console.log(response)
    if (!response.ok) {
        throw new NetworkError()
    }

    const data = await response.arrayBuffer()
    return endpoint.decode(new Uint8Array(data))
}
