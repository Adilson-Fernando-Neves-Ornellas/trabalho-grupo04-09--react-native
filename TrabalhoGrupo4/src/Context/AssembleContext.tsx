import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export interface Heroi {
  id: number;
  nome: string;
  descrição: string;
  img: string;
  forca: number;
  defesa: number;
}

interface AssembleContextProps {
  listaHerois: Heroi[];
  setListaHerois: Dispatch<SetStateAction<Heroi[]>>;
}

interface AssembleProviderProps {
  children: ReactNode;
}

export const AssembleContext = createContext<AssembleContextProps>({
  listaHerois: [],
  setListaHerois: () => {[]},
});

export const AssembleProvider: React.FC<AssembleProviderProps> = ({
  children,
}) => {
  const [listaHerois, setListaHerois] = useState<Heroi[]>([]);

  return (
    <AssembleContext.Provider value={{ listaHerois, setListaHerois }}>
      {children}
    </AssembleContext.Provider>
  );
};
