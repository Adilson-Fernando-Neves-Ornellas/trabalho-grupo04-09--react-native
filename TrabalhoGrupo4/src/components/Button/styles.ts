import { StyleSheet, Platform } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

export const styles = StyleSheet.create({
  button: {
    ...Platform.select({
      android:{
        backgroundColor: colors.bluePrimary,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
      },
      ios:{
        backgroundColor: colors.bluePrimary,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
      },
      default: {
        backgroundColor: colors.bluePrimary,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
      }
    })
    
  },
  text: {
    ...Platform.select({
      android:{
        color: colors.yellowPrimary,
        fontFamily: fonts.texto,
        fontSize: 16,
        textAlign: 'center',
        width: '100%',
      },
      ios:{
        color: colors.yellowPrimary,
        fontFamily: fonts.texto,
        fontSize: 16,
        textAlign: 'center',
        width: '100%',
      },
      default: {
        color: colors.yellowPrimary,
        fontFamily: fonts.texto,
        fontSize: 16,
        textAlign: 'center',
        width: '100%',
      }
    })
    
  },
});
