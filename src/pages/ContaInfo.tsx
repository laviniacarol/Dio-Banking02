import { useContext } from "react";
import { Text, Link } from "@chakra-ui/react";
import { AppContext } from "../components/AppContext/AppContext";


const ContaInfo = () => {
  const { user } = useContext(AppContext);

  return (
  <>
  <Text fontSize="2xl" color="white" fontWeight="bold" mb={4}>
    Informações da Conta
  </Text>
  <Text fontSize="lg" color="white" mb={2}>
    Nome: {user?.name}
  </Text>
  <Text fontSize="lg" color="white" mb={4}>
    Email: {user?.email}
  </Text>
  <Link href={`/conta/${user?.id ?? '1'}`}>
  <Text fontSize="xl"  color="blue.500">
        Voltar para a Conta
  </Text>
  </Link>
  </>
)};

export default ContaInfo;
