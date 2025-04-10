import { cookies } from 'next/dist/client/components/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE() {
    //apiを叩くURLを作る処理
    const domain = process.env.NEXT_PUBLIC_API_DOMAIN

    const NewUrl = `${domain}api/v1/login`

    const response = await fetch(NewUrl, {
        method: 'delete',
        headers: { Cookie: String(cookies()) },
    })

    return response

    // return NextResponse.json({ status: 'success' }, { status: 200 })
}
