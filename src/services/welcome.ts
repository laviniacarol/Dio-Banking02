export const welcome = (email: string): string => {
  if (!email) return "Bem-vindo!";

  const namePart = email.split("@")[0];
  const formattedName =
    namePart.charAt(0).toUpperCase() + namePart.slice(1);

  return `Bem-vindo, ${formattedName}!`;
};
