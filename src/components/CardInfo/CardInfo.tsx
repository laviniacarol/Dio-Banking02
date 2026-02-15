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
      padding="20px"
      borderRadius="8px"
      boxShadow="md"
    >
      <Text fontWeight="bold" fontSize="2xl">
        {mainContent}
      </Text>
      
      <Text fontSize="xl">
        {content}
        </Text>
    </Box>
  );
};

export default CardInfo;
