export interface Endpoint<Response> {
    path: string
    method: 'get' | 'post' | 'put' | 'delete'
    credentials?: 'include' | 'omit' | 'same-origin'
    revalidate?: number | false
    parameters?: { [key: string]: string | number | boolean }
    decode(data: ArrayBuffer): Response
}
