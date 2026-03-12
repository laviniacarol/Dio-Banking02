import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage";

const dioBank = {
    login: true,
    user: {
        id: '1',
        name: 'Teste Dio',
        email: 'tester@dio.bank'
    }
}

describe('storage', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("Deve retornar o objeto padrão quando o localStorage estiver vazio", () => {
        expect(getAllLocalStorage()).toEqual({ login: false, user: null });
    });

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage();
        expect(localStorage.getItem('diobank')).toBe(JSON.stringify({ login: false, user: null }));
    })

    it('Deve alterar o valor do objeto no LocalStorage', () => {
        changeLocalStorage(dioBank);

        expect(localStorage.getItem('diobank')).toBe(JSON.stringify(dioBank));
    })

    it('Deve retornar o valor já salvo no localStorage', () => {
        localStorage.setItem('diobank', JSON.stringify(dioBank));

        expect(getAllLocalStorage()).toEqual(dioBank);
    })
});