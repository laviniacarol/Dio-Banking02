import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <ChakraButton
      onClick={onClick}
      colorScheme="teal"
      size="sm"
      width="100%"
      mt="5px"
    >
      {children}
    </ChakraButton>
  );
};
