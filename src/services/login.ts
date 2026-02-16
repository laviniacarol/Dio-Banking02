import { api } from "../api";

export const Login = async (
  email: string,
  setIsLoggedIn?: (isLoggedIn: boolean) => void,
  navigate?: (path: string) => void
): Promise<string> => {
  const data: any = await api;

  if (!email) return "Bem-vindo!";

  if (email !== data.email) {
    return "Email inválido!";
  }

  if (setIsLoggedIn) {
    setIsLoggedIn(true);
  }
  if (navigate) {
    navigate(`/conta/${data.id}`);
  }
  const name = email.split("@")[0];
  const formatted =
    name.charAt(0).toUpperCase() + name.slice(1);

  return `Bem-vindo, ${formatted}!`;
};
