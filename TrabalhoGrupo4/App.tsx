
import Routes from './src/routes/Routes';
import { AuthProvider } from './src/Context/Context';
import Cadastro from './src/pages/Cadastro';

export default function App() {
  return (
    // <AuthProvider>
    //   <Routes/>
    // </AuthProvider>
    <Cadastro/>
  );
}

