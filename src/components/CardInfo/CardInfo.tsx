import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string;
  content: string;
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Box
      color="white"
      borderColor="gray.200"
      backgroundColor="black"
      padding={{ base: "16px", md: "20px" }}
      borderRadius={{ base: "10px", md: "8px" }}
      boxShadow="md"
    >
      <Text fontWeight="bold" fontSize={{ base: "xl", md: "2xl" }}>
        {mainContent}
      </Text>
      
      <Text mt={2} fontSize={{ base: "lg", md: "xl" }}>
        {content}
        </Text>
    </Box>
  );
};

export default CardInfo;
