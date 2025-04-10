import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
    // emailとpasswordをURLからとる
    const email = req.nextUrl.searchParams.get('email')
    const password = req.nextUrl.searchParams.get('password')

    //apiを叩くURLを作る処理
    const domain = process.env.NEXT_PUBLIC_API_DOMAIN

    const NewUrl = `${domain}api/v1/login?email=${email}&password=${password}`

    // 作ったURLでapiを叩く
    const response = await fetch(NewUrl, {
        method: 'post',
    })

    return new Response(undefined, {
        headers: { 'set-cookie': response.headers.get('set-cookie') ?? '' }, // レスポンスヘッダーの設定 (ここのどっかにCookieがあります！)
        status: response.status, // HTTPステータスコードの設定
        statusText: response.statusText, // ステータスの説明文の設定
    })
}
