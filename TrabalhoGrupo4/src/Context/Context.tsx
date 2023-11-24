/**
 * Descrição: Este arquivo contém a implementação de um contexto React para gerenciar informações de autenticação.
 */

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

/**
 * @interface AuthContextProps
 * Interface que representa as propriedades do contexto `AuthContext`.
 * @property {boolean} logado - Indica se o usuário está autenticado.
 * @property {string} nome - Nome do usuário autenticado.
 * @property {Dispatch<SetStateAction<boolean>>} setLogado - Função para atualizar o estado de autenticação.
 * @property {Dispatch<SetStateAction<string>>} setNome - Função para atualizar o nome do usuário.
 */
interface AuthContextProps {
  logado: boolean;
  nome: string;
  setLogado: Dispatch<SetStateAction<boolean>>;
  setNome: Dispatch<SetStateAction<string>>;
}

/**
 * @interface AuthProviderProps
 * Interface que representa as propriedades do provedor `AuthProvider`.
 * @property {ReactNode} children - Componentes filhos a serem renderizados dentro do provedor.
 */
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * @const AuthContext
 * Contexto React utilizado para gerenciar informações de autenticação.
 */
export const AuthContext = createContext<AuthContextProps>({
  nome: '',
  logado: false,
  setLogado: () => { },
  setNome: () => { },
});

/**
 * @function AuthProvider
 * Provedor React utilizado para fornecer o contexto `AuthContext` para a aplicação.
 * @param {AuthProviderProps} props - Propriedades do provedor.
 * @returns {JSX.Element} - Elemento JSX representando o provedor.
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Estados locais que armazenam informações de autenticação.
  const [logado, setLogado] = useState<boolean>(false);
  const [nome, setNome] = useState<string>('');

  return (
    // Fornecendo o contexto `AuthContext` com os valores atuais dos estados locais.
    <AuthContext.Provider value={{ nome, logado, setLogado, setNome }}>
      {children}
    </AuthContext.Provider>
  );
};
