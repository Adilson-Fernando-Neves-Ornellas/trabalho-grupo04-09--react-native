import {
  TouchableOpacity,
  Text,
  View,
  ViewProps,
  Linking,
  Image,
} from "react-native";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../styles/theme/colors";

interface CardAboutProps extends ViewProps {
  nome: string;
  urlGit: string;
  image: any;
}

export const CardAbout = ({ image, nome, urlGit, ...rest }: CardAboutProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(urlGit);
      }}
      style={styles.viewDetails}
    >
      <FontAwesome name="github" size={24} color={colors.yellowPrimary} />
      <Text style={styles.titleNome}> {nome} </Text>
    </TouchableOpacity>
  );
};
