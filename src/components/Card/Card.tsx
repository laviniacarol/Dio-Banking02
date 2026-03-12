import { Box } from "@chakra-ui/react";





export const Card = ({children} : any) => {
 
  return (
    <Box
      backgroundColor="white"
      borderRadius={{ base: "16px", md: "25px" }}
      padding={{ base: "20px", md: "24px" }}
      width="100%"
      maxWidth={{ base: "100%", sm: "420px" }}
      margin="0 auto"
      marginTop={{ base: "24px", md: "64px" }}
      boxShadow={{ base: "md", md: "xl" }}
    >
      
      {children}
     
    </Box>
  );
};
