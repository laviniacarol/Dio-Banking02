import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter} from "react-router-dom";
import { Layout } from "./components/Layout";
import { AppContextProvider } from "./components/AppContext/AppContext";
import MainRoutes from "./routes";
import { createLocalStorage } from "./services/storage";


function App() {

  !localStorage.getItem('diobank') && createLocalStorage();
 
   
  

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
