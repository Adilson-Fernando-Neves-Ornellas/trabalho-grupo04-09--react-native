
import { View, Text, Image } from 'react-native'; 
import styles from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/LogoSimples'

const Cadastro = () => {

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContent}>
        <Logo widthLogo={300} heightLogo={150}/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Button text='Cadastrar' buttonWidth={200} buttonHeight={60} textFontSize={36}/>
        <Text style={styles.text}>Já possui uma conta? Entre!</Text>
      </View>
      <Footer/>
    </View>
  );
};

export default Cadastro;
