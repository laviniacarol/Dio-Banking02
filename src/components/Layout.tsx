import { Box } from "@chakra-ui/react";
import { Header } from "./Header/Header";


export const Layout = ({ children }: any) => {
    return (
        <Box
            minHeight="100vh"
            bg="
    radial-gradient(circle at 20% 30%, rgba(0, 255, 200, 0.25), transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(120, 0, 255, 0.25), transparent 45%),
    radial-gradient(circle at 50% 80%, rgba(0, 120, 255, 0.25), transparent 50%),
    #000000
  "
        >
            <Header />
            <Box padding="25px">{children}</Box>
        </Box>
    )
}