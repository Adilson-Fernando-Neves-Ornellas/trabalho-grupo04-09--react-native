import { View, Image, ViewProps } from "react-native";
import ImageFooter from "../../assets/Images/HeroesFooter.jpg";
import { styles } from "./styles";

export const Footer = () => {
  return (
    <View style={styles.viewContainer}>
      <Image source={ImageFooter} style={styles.img} />
    </View>
  );
};
