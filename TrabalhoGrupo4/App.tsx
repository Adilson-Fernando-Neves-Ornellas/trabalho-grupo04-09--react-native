
import Routes from './src/routes/Routes';
import { AuthProvider } from './src/Context/AuthContext';
import {useFonts, Oswald_600SemiBold } from '@expo-google-fonts/oswald';
import {Bangers_400Regular} from '@expo-google-fonts/bangers'

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
      <Routes/>
    </AuthProvider>
  );
}

