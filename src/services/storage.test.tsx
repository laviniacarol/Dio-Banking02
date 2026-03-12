import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage";

const dioBank = {
    login: false
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');

    it("Deve retornar o objeto do localstorage com a chave 'diobank'", () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
        getAllLocalStorage();
        expect(mockGetItem).toHaveBeenCalledWith('diobank');
    });

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage();
        expect(mockSetItem).toHaveBeenNthCalledWith(1, 'diobank', JSON.stringify({ login: false }));
    })

    it('Deve alterar o valor do objeto no LocalStorage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank));
    })
});