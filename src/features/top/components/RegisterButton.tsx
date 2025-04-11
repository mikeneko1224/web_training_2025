import { Registration } from '../api/registration'

export const RegisterButtonAction = async (
    email: string,
    password: string,
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
    try {
        await Registration(email, password)
        alert('アカウント作成に成功しました')
        setIsOpenModal(false)
    } catch (error) {
        alert(error)
    }
}
