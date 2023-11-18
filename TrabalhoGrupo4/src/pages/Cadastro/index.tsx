import { View, Text, Image, ScrollView} from 'react-native'; 
import styles from './styles';
import { Form } from '../../components/InputList'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer';
import colors from '../../styles/theme/colors';
import LogoTeamHero from '../../assets/Images/TeamHeroesLogo.png'

const Cadastro = () => {
  return (
    <View style={styles.viewContainer}>
      <ScrollView accessibilityLabel='Rolagem' >
        <View style={styles.viewContent}>
            <Image source={LogoTeamHero} style={styles.logo} />
            <Form inputs={[{placeholder:'nome'}, {placeholder:'email'}, {placeholder: 'senha'}, {placeholder: 'confirmar senha'}]} />
            <Button text='Cadastrar' buttonWidth={200} buttonHeight={60} textFontSize={36}/>
            <Text style={styles.text}>Já possui uma conta? Entre!</Text>
          </View>
      </ScrollView>
      <Footer/>
    </View>
  );
};

export default Cadastro;
