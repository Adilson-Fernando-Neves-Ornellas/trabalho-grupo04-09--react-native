
import { View, Text, Image } from 'react-native'; 
import styles from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer';
import Logo from '../../assets/Images/TeamHeroesLogo.png'

const Cadastro = () => {

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContent}>
        <Image source={Logo}   />
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
