import { useContext } from "react";
import { Text, Link, Box } from "@chakra-ui/react";
import { AppContext } from "../components/AppContext/AppContext";


const ContaInfo = () => {
  const { user } = useContext(AppContext);

  return (
  <Box
    maxW={{ base: "100%", md: "720px" }}
    mx="auto"
    bg="rgba(0,0,0,0.7)"
    borderRadius={{ base: "12px", md: "16px" }}
    p={{ base: 4, md: 6 }}
  >
  <Text fontSize={{ base: "xl", md: "2xl" }} color="white" fontWeight="bold" mb={4}>
    Informações da Conta
  </Text>
  <Text fontSize={{ base: "md", md: "lg" }} color="white" mb={2}>
    Nome: {user?.name}
  </Text>
  <Text fontSize={{ base: "md", md: "lg" }} color="white" mb={4}>
    Email: {user?.email}
  </Text>
  <Link href={`/conta/${user?.id ?? '1'}`}>
  <Text fontSize={{ base: "lg", md: "xl" }} color="blue.300" fontWeight="semibold">
        Voltar para a Conta
  </Text>
  </Link>
  </Box>
)};

export default ContaInfo;
