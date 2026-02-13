
import { Login } from "./login"
import { api } from "../api";


describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    

    it('Deve exibir um alert com boas vindas', async () => {
        await Login('')
        expect(mockAlert).toHaveBeenCalledWith('Bem-vindo!')
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await Login('invalid-email')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    })
})