import { Platform, StyleSheet } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

const styles = StyleSheet.create({
  containerCards: {
    ...Platform.select({
      android:{
        margin: 30,
        backgroundColor: colors.blackPrimary,
        borderRadius: 8,
        flexDirection: "column",
        justifyContent: "space-between",
        maxHeight: '85%',
      },
      ios:{
        margin: 30,
        backgroundColor: colors.blackPrimary,
        borderRadius: 8,
        flexDirection: "column",
        justifyContent: "space-between",
        maxHeight: '85%',
      },
      default: {
        margin: 30,
        backgroundColor: colors.blackPrimary,
        borderRadius: 8,
        flexDirection: "column",
        justifyContent: "space-between",
        maxHeight: '85%',
      }
    })
  },
  cardCarrosel: {
    ...Platform.select({
      android:{
        padding: 10,
        height: "85%",
      },
      ios:{
        padding: 10,
        height: "85%",
      },
      default: {
        padding: 10,
        height: "85%",
        }
    })
  },
  div: {
    ...Platform.select({
      android:{
        marginBottom: 10,
        display: "flex",
        gap: 15,
        flexDirection: "row",
      },
      ios: {
        marginBottom: 10,
        display: "flex",
        gap: 15,
        flexDirection: "row",
      },
      default: {
        marginBottom: 10,
        display: "flex",
        gap: 15,
        flexDirection: "row",
      },
      })
  },
  textCard: {
    ...Platform.select({
      android:{
        color: colors.yellowPrimary,
        fontSize: 17,
        fontFamily: fonts.texto,
        width: "100%",
        textAlign: "center",
      },
      ios: {
        color: colors.yellowPrimary,
        fontSize: 17,
        fontFamily: fonts.texto,
        width: "100%",
        textAlign: "center",
      },
      default: {
        color: colors.yellowPrimary,
        fontSize: 17,
        fontFamily: fonts.texto,
        width: "100%",
        textAlign: "center",
      },
      })
  },
  infoCard: {
    ...Platform.select({
      android:{
        marginTop: -5,
        display: "flex",
        flexDirection: "column",
        gap: 0,
      },
      ios: {
        marginTop: -5,
        display: "flex",
        flexDirection: "column",
        gap: 0,
      },
      default: {
        marginTop: -5,
        display: "flex",
        flexDirection: "column",
        gap: 0,
      },
      })
  },
  textCardDescription:{
    ...Platform.select({
      android:{
        color: colors.yellowPrimary,
        fontSize: 14,
        fontFamily: fonts.texto,
        width: "100%",
        maxWidth: 195,
        textAlign: "center"
      },
      ios: {
        color: colors.yellowPrimary,
        fontSize: 14,
        fontFamily: fonts.texto,
        width: "100%",
        maxWidth: 195,
        textAlign: "center"
      },
      default: {
        color: colors.yellowPrimary,
        fontSize: 14,
        fontFamily: fonts.texto,
        width: "100%",
        maxWidth: 195,
        textAlign: "center"
      },
      })
  }
});

export default styles;
