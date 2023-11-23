import { StyleSheet, Platform } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

export const styles = StyleSheet.create({
  input: {
    borderColor: colors.blackPrimary,
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.blackPrimary,
    color: colors.yellowInput,
    fontFamily: fonts.logo,
    width: 282,
    fontSize:16,
    textAlign:'left'
  },
});
