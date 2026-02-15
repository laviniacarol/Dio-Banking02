import { Button, Center, Input } from "../__mocks__/chakra";
import { Card } from "../components/Card/Card";
import { Login } from "../services/login";


const Home = () => {
  const [email, setEmail] = useState<string>("");

  const handleLogin = async () => {
    const message = await Login(email);
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

function useState<T>(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
