import { api } from "../api";

interface IRegisterResponse {
  success: boolean;
  message: string;
}

export const Register = async (
  name: string,
  email: string,
  password: string
): Promise<IRegisterResponse> => {
  try {
    await api.post('/user', { name, email, password });
    return {
      success: true,
      message: "Conta criada com sucesso! Faça o login.",
    };
  } catch (error: any) {
    const message = error?.response?.data?.message || "Erro ao criar conta. Tente novamente.";
    return {
      success: false,
      message,
    };
  }
};
