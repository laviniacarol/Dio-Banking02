
import { Login } from "./login";

const mockSetIsLoggedIn = jest.fn();
const mockNavigate = jest.fn();

describe('login', () => {
    const mockEmail = 'tester@dio.bank';

    beforeEach(() => {
        mockSetIsLoggedIn.mockClear();
        mockNavigate.mockClear();
    });

    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
        const response = await Login(mockEmail, mockSetIsLoggedIn, mockNavigate)
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockNavigate).toHaveBeenCalledWith('/conta/1')
        expect(response).toBe('Bem-vindo, Tester!')
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await Login('invalid-email', mockSetIsLoggedIn, mockNavigate)
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        expect(mockNavigate).not.toHaveBeenCalled()
        expect(response).toBe('Email inválido!')
    })
})