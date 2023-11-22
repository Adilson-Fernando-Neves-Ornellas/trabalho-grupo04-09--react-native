import { View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Style from "./Style";
import TeamHeroesLogo from "../../assets/Images/TeamHeroesLogo.png";
import { AuthContext } from "../../Context/Context";
import Back from "../../assets/Images/Back.png";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = () => {
  const { setLogado } = useContext(AuthContext);

  const navigation = useNavigation();

  const sair = async () => {
    await AsyncStorage.removeItem("@user_id");
    setLogado(false);
    navigation.navigate("login" as never);
  };

  return (
    <View style={Style.containerheader}>
      <TouchableOpacity onPress={() => {navigation.navigate('about' as never)}}>
      <Image source={TeamHeroesLogo} style={Style.imgHeader} />
      </TouchableOpacity>
      <TouchableOpacity onPress={sair}>
        <Image source={Back} style={Style.imgHeader} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
