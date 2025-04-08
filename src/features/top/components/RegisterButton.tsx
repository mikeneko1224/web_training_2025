import { Registration } from '../api/registration'

export const RegisterButtonAction = async (email: string, password: string) => {
    await Registration(email, password)
}
