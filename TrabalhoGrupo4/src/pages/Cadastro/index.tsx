import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import LogoTeamHero from "../../assets/Images/TeamHeroesLogo.png";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../api/api";
import { InputList } from "../../components/InputList";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const navigation = useNavigation();

  const adicionarNovo = async (e: any) => {
    e.preventDefault();
    if (
      nome !== "" &&
      email !== "" &&
      senha !== "" &&
      confirmaSenha === senha
    ) {
      limpar();
      try {
        await api.post("/usuarios", { nome, email, senha });
        alert("cadastro efetuado com sucesso, retornando a pagina de login");
      } catch (error) {
        navigation.navigate("login" as never);
      }
    } else {
      alert("Dados Invalidos");
    }
  };

  const limpar = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setConfirmaSenha("");
  };

  return (
    <View style={styles.viewContainer}>
      <StatusBar />
      <ScrollView accessibilityLabel="Rolagem">
        <View style={styles.viewContent}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("about" as never);
            }}
          >
            <Image source={LogoTeamHero} style={styles.logo} />
          </TouchableOpacity>
          <InputList
            inputs={[
              {
                placeholder: "nome",
                value: nome,
                setValue: setNome,
                id: 1,
              },
              {
                placeholder: "email",
                value: email,
                setValue: setEmail,
                id: 2,
              },
              {
                placeholder: "senha",
                value: senha,
                setValue: setSenha,
                id: 3,
                secureTextEntry:true
              },
              {
                placeholder: "confirmar senha",
                value: confirmaSenha,
                setValue: setConfirmaSenha,
                id: 4,
                secureTextEntry:true
              },
            ]}
            limpar={limpar}
          />

          <View style={{ width: "100%", alignItems: "center", marginTop: 29 }}>
            <Button
              text="Cadastrar"
              onPress={adicionarNovo}
              buttonHeight={60}
              buttonWidth={200}
              textFontSize={36}
            />

            <Text
              onPress={() => navigation.navigate("login" as never)}
              style={styles.text}
            >
              Já possui uma conta? Entre!
            </Text>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default Cadastro;
