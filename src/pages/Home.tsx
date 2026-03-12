import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Center, Input } from "@chakra-ui/react";
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
        <h1>Faça o Login</h1>
      </Center>

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Center>
        <Button onClick={handleLogin}>Entrar</Button>
      </Center>
    </Card>
  );
};

export default Home;
