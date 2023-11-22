import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthContextProps {
  logado: boolean;
  setLogado: Dispatch<SetStateAction<boolean>>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  logado: false,
  setLogado: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [logado, setLogado] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ logado, setLogado }}>
      {children}
    </AuthContext.Provider>
  );
};