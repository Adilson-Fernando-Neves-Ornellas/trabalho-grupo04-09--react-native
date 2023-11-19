import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import Header from "../../components/header/header";
import CardsTime from "../../components/CardsTime/CardsTime";

const Time = () => {
  return (
    <View style={styles.containerHome}>
      <StatusBar/>
      <Header />
      <Text style={styles.tituloPageHome}>Time Atual</Text>
      <CardsTime />
    </View>
  );
};

export default Time;
