import { createContext, ReactNode } from "react";


interface IAppContext {
  user: string;
  isLoggedIn?: boolean,
}

export const AppContext = createContext<IAppContext>({ user: "" });


export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const user = "John Doe"; 
  const isLoggedIn = false
  return (
    
    <AppContext.Provider value={{user, isLoggedIn}}>
      {children}
    </AppContext.Provider>
  )
}


