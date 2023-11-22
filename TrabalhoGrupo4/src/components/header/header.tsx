import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Style from "./styles";
import TeamHeroesLogo from "../../assets/Images/TeamHeroesLogo.png";
import { AuthContext } from "../../Context/Context";
import Back from "../../assets/Images/Back.png";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

const Header = () => {
  const { setLogado, nome, setNome } = useContext(AuthContext);

  const navigation = useNavigation();

  const sair = async () => {
    await AsyncStorage.removeItem("@user_id");
    setLogado(false);
    setNome("");
    navigation.navigate("login" as never);
  };

  return (
    <View style={Style.containerheader}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("about" as never);
        }}
      >
        <Image source={TeamHeroesLogo} style={Style.imgHeader} />
      </TouchableOpacity>
      <View style={styles.containerUser}>
        {nome != "" && <Text style={styles.textUser}>Bem vindo, {nome}</Text>}
      </View>
      <TouchableOpacity onPress={sair}>
        <Image source={Back} style={Style.imgHeader} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
