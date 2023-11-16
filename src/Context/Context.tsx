
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface AuthContextProps {

}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({

});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {


  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
};
