import {
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import React, { useState, useContext } from "react";
import LogoTeamHero from "../../assets/Images/TeamHeroesLogo.png";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { InputList } from "../../components/InputList";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { api } from "../../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../Context/AuthContext";
import fonts from "../../styles/theme/fonts";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const { setLogado, setNome } = useContext(AuthContext);
  
  const navigation = useNavigation();

  const Logar = async (e: any) => {
    e.preventDefault();
    timeoutModal();
    if (email !== "" && senha !== "") {

      // REQUISIÇÃO GET

      const response = await api.get("/usuarios", {
        params: { email: email, senha: senha },
      });
      if (response.data[0] === undefined) {
        alert("Usuário ou Senha inválido!");
      } else {

        // ASYNC STORAGE SET

        await AsyncStorage.setItem(
          "@user_id",
          JSON.stringify(response.data[0].id)
        );
        await AsyncStorage.setItem(
          "@user_nome",
          JSON.stringify(response.data[0].nome)
        );

        //CONTEXT SET
        
        setLogado(true);
        setNome(response.data[0].nome);
        navigation.navigate("home" as never);
      }
    } else {
      alert("Preencha todos os campos!");
    }
    limpar();
  };

  const limpar = () => {
    setEmail("");
    setSenha("");
  };
  const handleModalVisible = () => {
    setIsModalVisible(false);
  };
  const timeoutModal = () => {
    setIsModalVisible(true);
    setTimeout(handleModalVisible, 3000);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={isModalVisible}
      >
        <View style={styles.modal}>
          <Text style={{ fontFamily: fonts.texto }}>
            Verificando Informações...
          </Text>
        </View>
      </Modal>
      <ScrollView>
        <View style={styles.viewContent}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("about" as never);
            }}
          >
            <Image source={LogoTeamHero} style={[styles.logo]} />
          </TouchableOpacity>
          <InputList
            inputs={[
              {
                id: 1,
                placeholder: "email",
                value: email,
                setValue: setEmail,
                secureTextEntry: false,
              },
              {
                id: 2,
                placeholder: "senha",
                value: senha,
                setValue: setSenha,
                secureTextEntry: true,
              },
            ]}
            limpar={limpar}
          />
          <View style={{ width: "100%", alignItems: "center", marginTop: 29 }}>
            <Button
              text="Entrar"
              buttonHeight={60}
              buttonWidth={200}
              textFontSize={36}
              onPress={Logar}
            />

            <Text
              style={styles.signupText}
              onPress={() => navigation.navigate("cadastro" as never)}
            >
              Não possui uma conta? Cadastre-se
            </Text>
          </View>
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
};

export default Login;
