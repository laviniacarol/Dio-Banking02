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

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };
    getData();
  }, []);


   const actualData = new Date();
   
   

   if(userData && id !== userData.id) {
     navigate("/");
   }
  return (
    <Center>
    <SimpleGrid columns={2} spacing={10}>
        {
            userData === undefined || userData === null ? 
            (
                <Center>
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


