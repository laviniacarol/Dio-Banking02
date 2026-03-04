import { createLocalStorage, getAllLocalStorage } from "./storage";


describe('storage', () => {

    it("Deve retornar o objeto do localstorage com a chave 'diobank'", () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
        getAllLocalStorage();
        expect(mockGetItem).toHaveBeenCalledWith('diobank');
    });

    it('Deve criar o objeto no localStorage', () => {
        const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
        createLocalStorage();
        expect(mockSetItem).toHaveBeenNthCalledWith(1, 'diobank', JSON.stringify({ login: false }));
    })
});