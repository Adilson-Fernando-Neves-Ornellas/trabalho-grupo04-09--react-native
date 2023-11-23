import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import TeamHeroesLogo from "../../assets/Images/TeamHeroesLogo.png";
import { AuthContext } from "../../Context/Context";
import flyhero from "../../assets/Images/flyhero.png";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

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
    <View style={styles.containerheader}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("about" as never);
        }}
      >
        <Image source={TeamHeroesLogo} style={styles.imgHeader} />
      </TouchableOpacity>
      <View style={styles.containerUser}>
        {nome != "" && <Text style={styles.textUser}>Bem vindo, {nome}</Text>}
      </View>
      <TouchableOpacity
        style={{ flexDirection: "row", gap: -25 }}
        onPress={sair}
      >
        <Image source={flyhero} style={styles.flyImg} />
        <FontAwesome5 name="door-open" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
