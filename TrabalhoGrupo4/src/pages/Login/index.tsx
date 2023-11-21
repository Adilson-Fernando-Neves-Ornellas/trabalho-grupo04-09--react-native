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
        if( response.data && response.data.length > 0){
          await AsyncStorage.setItem('@user_id', JSON.stringify(response.data[0].id))

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
      <StatusBar/>
      <ScrollView>
        <View style={styles.viewContent}>

          <Image
          source={LogoTeamHero}
          style={[styles.logo , {marginTop: 10, marginBottom:50}]}
          />
          <InputList inputs={[{placeholder:'email',value: email , setValue: setEmail}, {placeholder: 'senha', value: senha , setValue: setSenha}]} limpar={limpar}/>
          <Button text="Entrar" buttonHeight={60} buttonWidth={200} textFontSize={36} onPress={Logar}/>
        
          <Text style={styles.signupText} onPress={() => navigation.navigate ('cadastro' as never)}>Não possui uma conta? Cadastre-se</Text>
        </View>
      </ScrollView>
      
    < Footer/>
    </View>
  );
};

export default Login;
