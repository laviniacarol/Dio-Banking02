import { Box } from "@chakra-ui/react";


import { api } from "../../api";



export const Card = ({children} : any) => {
 
  return (
    <Box
      backgroundColor="white"
      borderRadius="25px"
      padding="15px"
      maxWidth="400px"
      margin="0 auto"
      marginTop="100px"
    >
      
      {children}
     
    </Box>
  );
};
