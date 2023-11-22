import {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
  } from "react";
  
  interface AssembleContextProps {
    logado: boolean;
    setLogado: Dispatch<SetStateAction<boolean>>;
  }
  
  interface AssembleProviderProps {
    children: ReactNode;
  }
  
  export const AssembleContext = createContext<AuthContextProps>({
    logado: false,
    setLogado: () => {},
  });
  
  export const AssembleProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [logado, setLogado] = useState<boolean>(false);
  
    return (
      <AssembleContext.Provider value={{ logado, setLogado }}>
        {children}
      </AssembleContext.Provider>
    );
  };