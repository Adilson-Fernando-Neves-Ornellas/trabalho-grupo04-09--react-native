import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from "react-native";
import React, {useState, useContext} from 'react'
import LogoTeamHero from '../../assets/Images/TeamHeroesLogo.png'
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { InputList } from "../../components/InputList";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { api } from "../../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../Context/Context";


const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { setLogado } = useContext(AuthContext)
  
  const navigation = useNavigation();

  const Logar = async (e: any) => {
    e.preventDefault();
    if( email !== "" && senha !== "" ) {
      try {
        limpar()
        const response = await api.get('/usuarios', { params: {email: email, senha: senha}})
        console.log(response.data.length)
        if( response.data && response.data.length > 0){
          await AsyncStorage.setItem('@user_id', response.data[0].id)

          setLogado(true)
          navigation.navigate('home' as never);
        } else {
          alert("Email ou Senha Inválido")
        }
        } catch (error) {
          alert('Erro ao logar')
      }
    } else {
      limpar()
      alert("Preencha todos os campos!")
    };
  }

  const limpar = () => {
    setEmail("");
    setSenha("");
  };
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
