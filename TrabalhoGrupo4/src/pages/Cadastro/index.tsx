/**
 * Descrição: Este arquivo contém a implementação da tela de cadastro da aplicação.
 */

import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import LogoTeamHero from "../../assets/Images/TeamHeroesLogo.png";
import { api } from "../../api/api";
import { InputList } from "../../components/InputList";

/**
 * @function Cadastro
 * Componente funcional que representa a tela de cadastro.
 * @returns {JSX.Element} - Elemento JSX representando a tela.
 */
const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const navigation = useNavigation();

  /**
   * Função que tenta adicionar um novo usuário.
   * @param {Event} e - Evento do clique no botão de cadastro.
   */
  const adicionarNovo = async (e: any) => {
    e.preventDefault();
    if (nome !== "" && email !== "" && senha !== "" && confirmaSenha === senha) {
      limpar();
      try {
        await api.post("/usuarios", { nome, email, senha });
        alert("Cadastro efetuado com sucesso, retornando à página de login");
      } catch (error) {
        navigation.navigate("login" as never);
      }
    } else {
      alert("Dados inválidos");
    }
  };

  /**
   * Função que limpa os campos do formulário.
   */
  const limpar = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setConfirmaSenha("");
  };

  return (
    <View style={styles.viewContainer}>
      {/* Barra de status */}
      <StatusBar />

      {/* Área rolável da tela */}
      <ScrollView accessibilityLabel="Rolagem">
        <View style={styles.viewContent}>
          {/* Logo da TEAMHEROES com ação para navegar para a tela "Sobre Nós" */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("about" as never);
            }}
          >
            <Image source={LogoTeamHero} style={styles.logo} />
          </TouchableOpacity>

          {/* Componente de lista de inputs para o formulário */}
          <InputList
            inputs={[
              {
                placeholder: "Nome",
                value: nome,
                setValue: setNome,
                id: 1,
              },
              {
                placeholder: "Email",
                value: email,
                setValue: setEmail,
                id: 2,
              },
              {
                placeholder: "Senha",
                value: senha,
                setValue: setSenha,
                id: 3,
                secureTextEntry: true,
              },
              {
                placeholder: "Confirmar Senha",
                value: confirmaSenha,
                setValue: setConfirmaSenha,
                id: 4,
                secureTextEntry: true,
              },
            ]}
            limpar={limpar}
          />

          {/* Área com botão de cadastro e texto para navegar para a tela de login */}
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

      {/* Rodapé da tela */}
      <Footer />
    </View>
  );
};

export default Cadastro;

