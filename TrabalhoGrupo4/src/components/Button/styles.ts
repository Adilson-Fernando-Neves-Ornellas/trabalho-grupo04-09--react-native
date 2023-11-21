import { StyleSheet } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.bluePrimary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 29,
  },
  text: {
    color: colors.yellowPrimary,
    fontFamily: fonts.texto,
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
    height: '100%',
    bottom: 5
  },
});
