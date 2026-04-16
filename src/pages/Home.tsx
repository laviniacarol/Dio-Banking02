import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Center, Input, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { Card } from "../components/Card/Card";
import { Login } from "../services/login";
import { Register } from "../services/register";
import { AppContext } from "../components/AppContext/AppContext";


const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [regName, setRegName] = useState<string>("");
  const [regEmail, setRegEmail] = useState<string>("");
  const [regPassword, setRegPassword] = useState<string>("");
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

  const handleRegister = async () => {
    const response = await Register(regName, regEmail, regPassword);
    alert(response.message);
    if (response.success) {
      setRegName("");
      setRegEmail("");
      setRegPassword("");
    }
  };

  return (
    <Card>
      <Tabs isFitted variant="enclosed" colorScheme="blue">
        <TabList mb={4}>
          <Tab fontWeight="bold">Login</Tab>
          <Tab fontWeight="bold">Cadastrar</Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
            <Center mb={{ base: 4, md: 6 }}>
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
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
          </TabPanel>

          <TabPanel px={0}>
            <Center mb={{ base: 4, md: 6 }}>
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                Criar Conta
              </Text>
            </Center>
            <Input
              placeholder="Nome"
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
              mb={3}
              size={{ base: "md", md: "lg" }}
            />
            <Input
              placeholder="Email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              mb={3}
              size={{ base: "md", md: "lg" }}
            />
            <Input
              placeholder="Senha"
              type="password"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              mb={5}
              size={{ base: "md", md: "lg" }}
            />
            <Center>
              <Button width="100%" maxW={{ base: "100%", md: "240px" }} size={{ base: "md", md: "lg" }} onClick={handleRegister}>
                Cadastrar
              </Button>
            </Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
};

export default Home;
