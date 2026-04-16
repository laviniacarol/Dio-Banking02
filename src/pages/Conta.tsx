import { SimpleGrid, Spinner, Center } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api"; 
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext/AppContext";


interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}


const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      return;
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem('diobank_token');
        const response = await api.get(`/user/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data: UserData = response.data;
        setUserData(data);

        if (data && id !== data.id) {
          navigate("/");
        }
      } catch {
        navigate("/");
      }
    };
    getData();
  }, [id, navigate]);

  const actualData = new Date();
  return (
    <Center px={{ base: 0, md: 2 }}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 8 }} width="100%" maxW="980px">
        {
            userData === undefined || userData === null ? 
            (
          <Center minH="180px">
                    <Spinner color="white" size="xl" />
                </Center>
            ) : 
            (
                <>
              <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData.getDate()}/${actualData.getMonth() + 1}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} />
             
                <CardInfo mainContent="Saldo disponível" content={`R$ ${userData?.balance.toFixed(2)}`} />
             </>
            )
        }
    </SimpleGrid>
    </Center>
  );
}

export default Conta;


