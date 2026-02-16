import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter} from "react-router-dom";
import { Layout } from "./components/Layout";
import ContaInfo from "./pages/ContaInfo";
import { AppContextProvider } from "./components/AppContext/AppContext";
import MainRoutes from "./routes";




function App() {
  return (
    <BrowserRouter>
   <AppContextProvider>
       <ChakraProvider>
        <Layout>
          <MainRoutes/>
        </Layout>
      </ChakraProvider>
   </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
