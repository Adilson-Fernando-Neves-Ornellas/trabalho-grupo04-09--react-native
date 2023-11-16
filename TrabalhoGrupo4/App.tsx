
import Routes from './src/routes/Routes';
import { AuthProvider } from './src/Context/Context';

export default function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}

