import { Box, Flex, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box boxShadow="sm" bg="black">
      <Flex maxW="1200px" mx="auto" align="center" px="16px" py="12px">
        <Heading size="md" color="white">
          DIO BANK
        </Heading>
      </Flex>
    </Box>
  );
};
