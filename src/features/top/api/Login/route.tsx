import { Login } from '../login'

//cookieの設定

export async function LoginRoute(email: string, password: string) {
    try {
        await Login(email, password)
        return new Response('Cookie set!', {
            status: 200,
            headers: {
                'Set-Cookie': 'userId=12345; Path=/; HttpOnly',
            },
        })
    } catch (error) {
        alert(error)
    }
}
