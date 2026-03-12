import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Center, Input, Text } from "@chakra-ui/react";
import { Card } from "../components/Card/Card";
import { Login } from "../services/login";
import { AppContext } from "../components/AppContext/AppContext";


const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { login } = useContext(AppContext);

  const handleLogin = async () => {
    const response = await Login(email, password);

    alert(response.message);

    if (response.success && response.user) {
      login(response.user);
      navigate(`/conta/${response.user.id}`);
    }
  };

  return (
    <Card>
       <Center>
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={{ base: 4, md: 6 }}>
          Faça o Login
        </Text>
      </Center>

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb={3}
        size={{ base: "md", md: "lg" }}
      />

      <Input
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        mb={5}
        size={{ base: "md", md: "lg" }}
      />

      <Center>
        <Button width="100%" maxW={{ base: "100%", md: "240px" }} size={{ base: "md", md: "lg" }} onClick={handleLogin}>
          Entrar
        </Button>
      </Center>
    </Card>
  );
};

export default Home;
