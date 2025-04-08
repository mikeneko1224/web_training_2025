import { NextRequest, NextResponse } from 'next/server'
import { apiClient } from '@/api/api-client'
import { Endpoint } from '@/api/endpoint'

const endpoint: (email: string, password: string) => Endpoint<undefined> = (
    email: string,
    password: string
) => ({
    path: 'login',
    method: 'post',
    revalidate: 0,
    parameters: { email: email, password: password },
    decode: () => undefined,
})

export const Login: (
    email: string,
    password: string
) => Promise<undefined> = async (email: string, password: string) => {
    return await apiClient(endpoint(email, password))
}
