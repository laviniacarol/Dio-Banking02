export interface IUserStorage {
    id: string;
    name: string;
    email: string;
}

export interface IDioBank {
    login: boolean;
    user: IUserStorage | null;
}

const dioBank: IDioBank = {
    login: false,
    user: null,
};

export const getAllLocalStorage = (): IDioBank => {
    const storage = localStorage.getItem('diobank');

    if (!storage) {
        createLocalStorage();
        return dioBank;
    }

    try {
        const parsedStorage = JSON.parse(storage);

        return {
            login: Boolean(parsedStorage?.login),
            user: parsedStorage?.user ?? null,
        };
    } catch {
        createLocalStorage();
        return dioBank;
    }
};

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank));
};

export const changeLocalStorage = (diobank: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(diobank));
};

