
import Routes from './src/routes/Routes';
import { AuthProvider } from './src/Context/Context';
import {useFonts, Oswald_600SemiBold } from '@expo-google-fonts/oswald';
import {Bangers_400Regular} from '@expo-google-fonts/bangers'
import Login from './src/pages/Login';

export default function App() {

  const [fontsLoaded] = useFonts({
    Oswald_600SemiBold,
    Bangers_400Regular
  })

  if(!fontsLoaded){
    return null;
  }

  return (
    <AuthProvider>
      <Login/>
    </AuthProvider>
  );
}

