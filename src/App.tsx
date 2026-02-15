import { ChakraProvider, Box } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conta from "./pages/Conta";
import { Layout } from "./components/Layout";
import ContaInfo from "./pages/ContaInfo";
import { AppContextProvider } from "./components/AppContext/AppContext";




function App() {
  return (
    <BrowserRouter>
   <AppContextProvider>
       <ChakraProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/conta/:id" element={<Conta />} />
            <Route path="/infoconta" element={<ContaInfo />} />
          </Routes>
        </Layout>
      </ChakraProvider>
   </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
