
import { View, Text } from 'react-native'; 
import styles from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer';

const Cadastro = () => {

  return (
    <View style={styles.viewContainer}>
      <View>
        {/* <Logo/> */}
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Button/>
        <Text style={styles.text}>Já possui uma conta? Entre!</Text>
      </View>
      <Footer/>
    </View>
  );
};

export default Cadastro;
