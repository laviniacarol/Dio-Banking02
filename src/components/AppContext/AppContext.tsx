import { createContext, ReactNode, useEffect, useState } from "react";
import { changeLocalStorage, getAllLocalStorage, IUserStorage } from "../../services/storage";


interface IAppContext {
  user: IUserStorage | null;
  isLoggedIn: boolean;
  login: (user: IUserStorage) => void;
  logout: () => void;
}

export const AppContext = createContext({} as IAppContext)


export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
  const [user, setUser] = useState<IUserStorage | null>(null);

  useEffect(() => {
    const storage = getAllLocalStorage();
    setIsLoggedIn(storage.login);
    setUser(storage.user);
  }, [])

  const login = (currentUser: IUserStorage): void => {
    setIsLoggedIn(true);
    setUser(currentUser);
    changeLocalStorage({ login: true, user: currentUser });
  };

  const logout = (): void => {
    setIsLoggedIn(false);
    setUser(null);
    changeLocalStorage({ login: false, user: null });
    localStorage.removeItem('diobank_token');
  };

  return (
    <AppContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AppContext.Provider>
  )
}


