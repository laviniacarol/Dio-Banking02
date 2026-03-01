import { getAllLocalStorage } from "./storage";


describe('storage', () => {
    const getItem = jest.spyOn(Storage.prototype, 'getItem');

    it("should return all local storage", () => {
        getAllLocalStorage();
        expect(getItem).toHaveBeenCalled();
    });
});