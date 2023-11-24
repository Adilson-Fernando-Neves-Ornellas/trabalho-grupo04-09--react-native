/**
 * Descrição: Este arquivo contém a implementação de um contexto React para gerenciar uma lista de heróis.
 */

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

/**
 * Interface que representa a estrutura de um herói.
 */
export interface Heroi {
  id: number;
  nome: string;
  descrição: string;
  img: string;
  gif: string;
  forca: number;
  defesa: number;
}

/**
 * Interface que representa as propriedades do contexto `AssembleContext`.
 */
interface AssembleContextProps {
  listaHerois: Heroi[];
  setListaHerois: Dispatch<SetStateAction<Heroi[]>>;
}

/**
 * Interface que representa as propriedades do provedor `AssembleProvider`.
 */
interface AssembleProviderProps {
  children: ReactNode;
}

/**
 * Contexto React utilizado para gerenciar uma lista de heróis.
 */
export const AssembleContext = createContext<AssembleContextProps>({
  listaHerois: [],
  setListaHerois: () => { [] },
});

/**
 * Provedor React utilizado para fornecer o contexto `AssembleContext` para a aplicação.
 * @param {AssembleProviderProps} props - Propriedades do provedor.
 * @returns {JSX.Element} - Elemento JSX representando o provedor.
 */
export const AssembleProvider: React.FC<AssembleProviderProps> = ({
  children,
}) => {
  // Estado local que armazena a lista de heróis e a função para atualizar a lista.
  const [listaHerois, setListaHerois] = useState<Heroi[]>([]);

  return (
    // Fornecendo o contexto `AssembleContext` com os valores atuais do estado local.
    <AssembleContext.Provider value={{ listaHerois, setListaHerois }}>
      {children}
    </AssembleContext.Provider>
  );
};
