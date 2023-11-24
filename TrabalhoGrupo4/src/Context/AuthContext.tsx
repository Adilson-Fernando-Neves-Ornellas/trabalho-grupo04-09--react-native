import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthContextProps {
  logado: boolean;
  nome: string;
  setLogado: Dispatch<SetStateAction<boolean>>;
  setNome: Dispatch<SetStateAction<string>>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  nome:'',
  logado: false,
  setLogado: () => {},
  setNome: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [logado, setLogado] = useState<boolean>(false);
  const [nome, setNome] = useState<string>('');

  return (
    <AuthContext.Provider value={{ nome, logado, setLogado, setNome }}>
      {children}
    </AuthContext.Provider>
  );
};