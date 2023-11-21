import Routes from "./src/routes/Routes";
import { AuthProvider } from "./src/Context/Context";
import { useFonts, Oswald_600SemiBold } from "@expo-google-fonts/oswald";
import { Bangers_400Regular } from "@expo-google-fonts/bangers";
import { initializeApp } from "firebase/app";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAREZ3AxmuSAi4Jgsq4J8_XpnZRKauqEUQ",
    authDomain: "mobilegrupo4.firebaseapp.com",
    databaseURL: "https://mobilegrupo4-default-rtdb.firebaseio.com",
    projectId: "mobilegrupo4",
    storageBucket: "mobilegrupo4.appspot.com",
    messagingSenderId: "1080294930994",
    appId: "1:1080294930994:web:52cd40c46581ff35e6da2b",
  };

  const app = initializeApp(firebaseConfig);

  const [fontsLoaded] = useFonts({
    Oswald_600SemiBold,
    Bangers_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
