import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { isLoggedIn, logout } = useContext(AppContext);

  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate('/')
  }

  return (
    <Flex boxShadow="sm" bg="black" px={{ base: "12px", md: "24px" }}>
      <Flex maxW="1200px" w="100%" mx="auto" align="center" py={{ base: "12px", md: "14px" }}>
        <Box>
          <Heading size={{ base: "sm", md: "md" }} color="white" letterSpacing="wide">
            DIO BANK
          </Heading>
        </Box>
      {
         isLoggedIn && (
          <>
      <Spacer />
      <Button size={{ base: "sm", md: "md" }} onClick={handleLogout}>
        Sair
      </Button>
      </>
)
}
      </Flex>
    </Flex>

  );
};
