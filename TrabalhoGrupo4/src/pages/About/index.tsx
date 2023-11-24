/**
 * Descrição: Este arquivo contém a implementação da tela de "Sobre Nós" da aplicação.
 */

import React from "react";
import { View, Text, Image, ScrollView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Footer } from "../../components/Footer";
import LogoTeamHero from "../../assets/Images/aboutUsButton.png";
import { CardAbout } from "../../components/CardAbout";
import prof from "../../assets/Images/prof.png";
import Header from "../../components/header/header";
import { Button } from "../../components/Button";

/**
 * @function About
 * Componente funcional que representa a tela "Sobre Nós".
 * @returns {JSX.Element} - Elemento JSX representando a tela.
 */
const About = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewContainer}>
      {/* Barra de status */}
      <StatusBar />

      {/* Cabeçalho da tela */}
      <Header />

      {/* Área rolável da tela */}
      <ScrollView accessibilityLabel="Rolagem">
        <View style={styles.viewContent}>
          {/* Logo da TEAMHEROES */}
          <Image source={LogoTeamHero} style={styles.logo} />

          {/* Textos informativos */}
          <Text style={styles.text}>Obrigado por usar nossos serviços!</Text>
          <Text style={styles.text}>A TEAMHEROES é:</Text>

          {/* Seções de Cards com informações sobre os membros da equipe */}
          <View style={{ margin: 10, flex: 1, flexDirection: "row" }}>
            <CardAbout
              image={prof}
              nome="Raynan Titoneli"
              urlGit="https://github.com/tiktoneli"
            />
            <CardAbout
              image={prof}
              nome="Adilson Fernando"
              urlGit="https://github.com/Adilson-Fernando-Neves-Ornellas"
            />
          </View>
          <View style={{ margin: 10, flex: 1, flexDirection: "row" }}>
            <CardAbout
              image={prof}
              nome="Elaine Dutra"
              urlGit="https://github.com/Elaine-Dutra"
            />
            <CardAbout
              image={prof}
              nome="Luan Terra"
              urlGit="https://github.com/LuanTerra-Apollo"
            />
          </View>
          <View style={{ margin: 10, flex: 1, flexDirection: "row" }}>
            <CardAbout
              image={prof}
              nome="Taynara Aguiar"
              urlGit="https://github.com/tayaguiar"
            />
            <CardAbout
              image={prof}
              nome="Douglas Maia"
              urlGit="https://github.com/DouglasMaiaa"
            />
          </View>

          {/* Botão de voltar */}
          <Button
            text="Voltar"
            buttonHeight={40}
            buttonWidth={100}
            textFontSize={16}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </ScrollView>

      {/* Rodapé da tela */}
      <Footer />
    </View>
  );
};

export default About;
