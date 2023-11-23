import { useContext, useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import Header from "../../components/header/header";
import CardHerois from "../../components/CardsHerois/CardsHerois";
import { AssembleContext } from "../../Context/AssembleContext";

const Home = () => {
  const { listaHerois } = useContext(AssembleContext);

  return (
    <View style={styles.containerHome}>
      <StatusBar />
      <Header />
      <Text style={styles.tituloPageHome}>Monte seu Time ({listaHerois.length} / 5)</Text>
      <CardHerois />
    </View>
  );
};

export default Home;
