import { View, Text, Image, ScrollView, Alert, TextInput, Button} from 'react-native'; 
import React, {useState } from 'react';
import styles from './styles';
// import { Form } from '../../components/InputList'
// import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer';
import LogoTeamHero from '../../assets/Images/TeamHeroesLogo.png'
import { useNavigation } from '@react-navigation/native';
import { api } from '../../api/api';



const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const navigation = useNavigation();

  const adicionarNovo = async() => {
    if(nome !== "" && email !== "" && senha !== ""  && confirmaSenha === senha){
      const response = await api.post("/herois");
      Alert.alert("cadastro efetuado com sucesso, retornando a pagina de login")
      navigation.navigate('login' as never);
      limpar();
    }else{
      Alert.alert("Dados Invalidos")
    }
  };

  const limpar = () => {
    setNome('')
    setEmail('')
    setSenha('')
    setConfirmaSenha('')
  };

  return (
    <View style={styles.viewContainer}>
      <ScrollView accessibilityLabel='Rolagem' >
        <View style={styles.viewContent}>
            <Image source={LogoTeamHero} style={styles.logo} />


            {/* <Form
              inputs={[
                {
                  placeholder: 'nome',
                  value: nome,
                  setValue: setNome,
                },
                {
                  placeholder: 'email',
                  value: email,
                  setValue: setEmail,
                },
                {
                  placeholder: 'senha',
                  value: senha,
                  setValue: setSenha,
                },
                {
                  placeholder: 'confirmar senha',
                  value: confirmaSenha,
                  setValue: setConfirmaSenha,
                },
              ]}
            />
            <Button text='Cadastrar' buttonWidth={200} buttonHeight={60} textFontSize={36} onPress={adicionarNovo}> */}

          <TextInput
              style={styles.input}
              value={nome}
              onChangeText={(text) => setNome(text)}
              placeholder="Insira seu nome"
            />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Insira o email"
            />
            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={(text) => setSenha(text)}
              placeholder="Insira a senha"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              value={confirmaSenha}
              onChangeText={(text) => setConfirmaSenha(text)}
              placeholder="Confirma senha"
              secureTextEntry
            />
            <Button color={"#8B0000"}  title="Cadastrar" onPress={adicionarNovo} />

            <Text style={styles.text}>Já possui uma conta? Entre!</Text>
          </View>
      </ScrollView>
      <Footer/>
    </View>
  );
};

export default Cadastro;
