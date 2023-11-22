import { StyleSheet } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

const styles = StyleSheet.create({
  containerHome:{
    flex: 1,
    backgroundColor:colors.redBackground
  },
  tituloPageHome: {
    textAlign: 'center',
    fontSize: 24,
    color: colors.yellowPrimary,
    fontFamily: fonts.texto,
    marginTop: 20
  },
  buttonAssemble:{
    alignItems:'center'
  }
});

export default styles;
