import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card/Card";
import { Login } from "../services/login";
import { AppContext } from "../components/AppContext/AppContext";


const Home = () => {
  const [email, setEmail] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const message = await Login(email, setIsLoggedIn, navigate);
    alert(message);
  };

  return (
    <Card>
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
    </Card>
  );
};

export default Home;
