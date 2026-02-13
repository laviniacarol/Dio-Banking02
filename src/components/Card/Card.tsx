import { Box, Center, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Login } from "../../services/login";
import { Button } from "../Button/Button";

import { api } from "../../api";

interface UserData {
  email: string;
  password: string;
  name: string;
}

export const Card = () => {
  const [email, setEmail] = useState<string>("");
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };
    getData();
  }, []);



  console.log(userData);

  const handleLogin = async () => {
    const message = await Login(email);
    alert(message);
  };

  return (
    <Box
      backgroundColor="white"
      borderRadius="25px"
      padding="15px"
      maxWidth="400px"
      margin="0 auto"
      marginTop="100px"
    >
      { userData === null || userData === undefined ? <h1>Loading</h1> : <h1>Informações carregadas</h1> }
      <Center>
        <h1>Faça o Login</h1>
      </Center>

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input placeholder="Senha" type="password" />

      <Center>
        <Button onClick={handleLogin}>Entrar</Button>
      </Center>
    </Box>
  );
};
