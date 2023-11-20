import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Images/TeamHeroesLogo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Input</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Botão Entrar Pressionado')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>Não possui uma conta? Cadastre-se</Text>
      
      {/* Adicione o footer com a imagem aqui */}
      <View style={styles.footer}>
        <Image
          source={require('../../assets/Images/HeroesFooter.jpg')}
          style={styles.footerImage}
        />
      </View>
    </View>
  );
};

export default Login;
