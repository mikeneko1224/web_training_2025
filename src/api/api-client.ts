import { notFound } from 'next/navigation'
import { Maintenance, NetworkError, ServerError } from './api-error'
import { Endpoint } from './endpoint'

export const apiClient = async <Response>(
    endpoint: Endpoint<Response>,
    isClient = false //デフォルト値に設定
): Promise<Response> => {
    const domain = isClient ? '/' : process.env.NEXT_PUBLIC_API_DOMAIN
    const parameters = Object.entries(endpoint.parameters || {})
        .map((entry) => (entry[1] ? `${entry[0]}=${entry[1]}` : undefined))
        .filter((i) => i)
        .join('&')

    const url = isClient
        ? `${domain}api/${endpoint.path}${parameters ? `?${parameters}` : ''}`
        : `${domain}api/v1/${endpoint.path}${
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
            notFound()
        },
        '500': () => {
            throw new ServerError()
        },
        '503': () => {
            throw new Maintenance()
        },
    }

    errorMap[String(response.status)]?.()

    if (!response.ok) {
        throw new NetworkError()
    }

    const data = await response.arrayBuffer()
    return endpoint.decode(new Uint8Array(data))
}
