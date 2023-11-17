import { ScrollView, Text } from 'react-native'; 
import styles from './styles';
import Header from '../../components/header/header';
import CardHerois from '../../components/CardsHerois/CardsHerois';

const Home = () => {

  return (
    <ScrollView style={styles.containerHome}>
      <Header />
      <Text style={styles.tituloPageHome}>Monte seu Time</Text>
      <CardHerois/>
    </ScrollView>
  );
};

export default Home;