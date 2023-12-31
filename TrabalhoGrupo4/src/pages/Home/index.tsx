import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import Header from "../../components/header/header";
import CardHerois from "../../components/CardsHerois/CardsHerois";

const Home = () => {
  return (
    <View style={styles.containerHome}>
      <StatusBar />
      <Header />
      <Text style={styles.tituloPageHome}>Monte seu Time</Text>
      <CardHerois />
    </View>
  );
};

export default Home;
