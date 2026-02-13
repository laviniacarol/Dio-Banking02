
const conta = {
    email: 'tester@dio.bank',
    password: '123',
    name: 'Teste da Silva'
}

export const api = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000);
})