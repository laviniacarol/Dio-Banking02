
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
        await Login(mockEmail, mockSetIsLoggedIn, mockNavigate)
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockNavigate).toHaveBeenCalledWith('/1')
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const message = await Login('invalid-email', mockSetIsLoggedIn, mockNavigate)
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        expect(mockNavigate).not.toHaveBeenCalled()
        expect(message).toBe('Email inválido!')
    })
})