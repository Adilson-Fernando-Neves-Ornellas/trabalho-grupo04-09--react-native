
import Routes from './src/routes/Routes';
import { AuthProvider } from './src/Context/Context';
import Login from './src/pages/Login';

export default function App() {
  return (
    <AuthProvider>
      <Login/>
    </AuthProvider>
  );
}

