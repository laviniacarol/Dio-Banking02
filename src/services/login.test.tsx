
import { Login } from "./login";

describe('login', () => {
    const mockEmail = 'tester@dio.bank';
    const mockPassword = '123';

    it('Deve autenticar caso email e senha sejam válidos', async () => {
        const response = await Login(mockEmail, mockPassword);

        expect(response.success).toBe(true);
        expect(response.message).toBe('Bem-vindo, Tester!');
        expect(response.user).toEqual({
            id: '1',
            name: 'Teste Dio',
            email: 'tester@dio.bank'
        });
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await Login('invalid-email', mockPassword);

        expect(response.success).toBe(false);
        expect(response.message).toBe('Email ou senha inválidos!');
        expect(response.user).toBeUndefined();
    })

    it('Deve exibir um erro caso a senha seja inválida', async () => {
        const response = await Login(mockEmail, 'wrong-password');

        expect(response.success).toBe(false);
        expect(response.message).toBe('Email ou senha inválidos!');
        expect(response.user).toBeUndefined();
    })

    it('Deve exigir email e senha para autenticar', async () => {
        const response = await Login(mockEmail, '');

        expect(response.success).toBe(false);
        expect(response.message).toBe('Preencha email e senha!');
        expect(response.user).toBeUndefined();
    })
})