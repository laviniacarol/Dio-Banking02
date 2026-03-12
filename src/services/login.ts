import { api } from "../api";

interface IApiUser {
  email: string;
  password: string;
  name: string;
  id: string;
}

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
  const data = (await api) as IApiUser;

  if (!email || !password) {
    return {
      success: false,
      message: "Preencha email e senha!",
    };
  }

  if (email !== data.email || password !== data.password) {
    return {
      success: false,
      message: "Email ou senha inválidos!",
    };
  }

  const name = email.split("@")[0];
  const formatted = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    success: true,
    message: `Bem-vindo, ${formatted}!`,
    user: {
      id: data.id,
      name: data.name,
      email: data.email,
    },
  };
};
