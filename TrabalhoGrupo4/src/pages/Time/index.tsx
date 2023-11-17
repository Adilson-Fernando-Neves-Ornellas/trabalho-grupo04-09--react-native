import { ScrollView, Text } from 'react-native'; 
import styles from "./styles";
import Header from '../../components/header/header';
import CardsTime from '../../components/CardsTime/CardsTime';

const Time = () => {
  return (
    <ScrollView style={styles.containerHome}>
      <Header />
      <Text style={styles.tituloPageHome}>Time Atual</Text>
      <CardsTime/>
    </ScrollView>
  );
};

export default Time;
