import { Text, Link } from "@chakra-ui/react";


const ContaInfo = () => {
  return (
  <>
  <Text fontSize="2xl" color="white" fontWeight="bold" mb={4}>
    Informações da Conta
  </Text>
  <Link href='/conta/1'>
  <Text fontSize="xl"  color="blue.500">
        Voltar para a Conta
  </Text>
  </Link>
  </>
)};

export default ContaInfo;
