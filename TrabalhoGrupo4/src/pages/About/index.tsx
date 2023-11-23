import { View, Text, Image, ScrollView, StatusBar} from "react-native";
import React from "react";
import styles from "./styles";
import { Footer } from "../../components/Footer";
import LogoTeamHero from "../../assets/Images/aboutUsButton.png";
import { CardAbout } from "../../components/CardAbout";
import prof from "../../assets/Images/prof.png";
import Header from "../../components/header/header";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";


const About = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.viewContainer}>
      <StatusBar />
      <Header />
      <ScrollView accessibilityLabel="Rolagem">
        <View style={styles.viewContent}>
          <Image source={LogoTeamHero} style={styles.logo} />

          <Text style={styles.text}>Obrigado por usar nossos serviços!</Text>
          <Text style={styles.text}>A TEAMHEROES é:</Text>
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
            <CardAbout image={prof} nome="Douglas Maia" urlGit="https://github.com/DouglasMaiaa" />
          </View>
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
      <Footer />
    </View>
  );
};

export default About;
