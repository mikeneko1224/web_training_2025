import { Registration } from '../api/registration'

export const RegisterButtonAction = async (email: string, password: string) => {
    try {
        await Registration(email, password)
        alert('アカウント作成に成功しました')
    } catch (error) {
        alert(error)
    }
}
