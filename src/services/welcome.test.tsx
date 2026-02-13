import { welcome } from "./welcome";

describe("welcome", () => {
  it("deve retornar mensagem com nome extraído do email", () => {
    expect(welcome("carol@email.com"))
      .toBe("Bem-vindo, Carol!");
  });

  it("deve retornar mensagem padrão se email vazio", () => {
    expect(welcome(""))
      .toBe("Bem-vindo!");
  });
});
