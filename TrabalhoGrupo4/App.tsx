
import Routes from './src/routes/Routes';
import { AuthProvider } from './src/Context/Context';
import {useFonts, Oswald_600SemiBold } from '@expo-google-fonts/oswald';
export default function App() {

  const [fontsLoaded] = useFonts({
    Oswald_600SemiBold
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

