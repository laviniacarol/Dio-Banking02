import { api } from "../api";

interface IAuthenticatedUser {
  id: string;
  name: string;
  email: string;
}

interface ILoginResponse {
  success: boolean;
  message: string;
  user?: IAuthenticatedUser;
}

export const Login = async (
  email: string,
  password: string
): Promise<ILoginResponse> => {
  if (!email || !password) {
    return {
      success: false,
      message: "Preencha email e senha!",
    };
  }

  try {
    const response = await api.post('/login', { email, password });
    const { token, user } = response.data;

    localStorage.setItem('diobank_token', token);

    return {
      success: true,
      message: `Bem-vindo, ${user.name}!`,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error: any) {
    const message = error?.response?.data?.message || "Email ou senha incorretos. Verifique seus dados e tente novamente.";
    return {
      success: false,
      message,
    };
  }
};
