import { Box, Flex, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box boxShadow="sm">
      <Flex maxW="1200px" mx="auto" align="center">
        <Heading size="md" color="white" padding="10px">
          DIO BANK
        </Heading>
      </Flex>
    </Box>
  );
};
