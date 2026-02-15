
const conta = {
    email: 'tester@dio.bank',
    password: '123',
    name: 'Teste da Silva',
    balance: 1475.00,
    id: '1'
}

export const api = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000);
})