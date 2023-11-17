import { View, Text } from 'react-native'; 
import styles from './styles';
import Header from '../../components/header/header';

const Home = () => {

  return (
    <View>
      <Header />
      <Text style={styles.text}>PAGE HOME</Text>
    </View>
  );
};

export default Home;