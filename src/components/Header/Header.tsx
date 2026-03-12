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
    <Flex boxShadow="sm" bg="black" padding="5px">
      <Box>
        <Flex maxW="1200px" mx="auto" align="center" px="16px" py="12px">
          <Heading size="md" color="white">
            DIO BANK
          </Heading>
        </Flex>
      </Box>
      {
         isLoggedIn && (
          <>
      <Spacer />
      <Button onClick={handleLogout}>
        Sair
      </Button>
      </>
)
}
</Flex>

  );
};
