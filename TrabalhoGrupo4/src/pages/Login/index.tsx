import { View, Text, Button } from "react-native";
import style from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "../../components/LogoModel";
import styles from "./styles";


const Login = () => {
  const navigation = useNavigation();

  const verificarLogin = () => {
    navigation.navigate("home" as never);
  };
  return (
    <View style={styles.container}>
      <Text style={style.text}>PAGE LOGIN</Text>
      <Button color={"#8B0000"} title="Entrar" onPress={verificarLogin} />
    </View>
  );
};

export default Login;
