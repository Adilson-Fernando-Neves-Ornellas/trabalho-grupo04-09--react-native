import { Platform, StyleSheet } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

const styles = StyleSheet.create({
  containerCards: {
    margin: 30,
    backgroundColor: colors.blackPrimary,
    borderRadius: 8,
    flexDirection: "column",
    justifyContent: "space-between",
    maxHeight: '85%',
  },
  cardCarrosel: {
    padding: 10,
    height: "85%",
  },
  div: {
    marginBottom: 10,
    display: "flex",
    gap: 15,
    flexDirection: "row",
  },
  textCard: {
    color: colors.yellowPrimary,
    fontSize: 17,
    fontFamily: fonts.texto,
    width: "100%",
    textAlign: "center",
  },
  infoCard: {
    marginTop: -5,
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  textCardDescription:{
    color: colors.yellowPrimary,
    fontSize: 14,
    fontFamily: fonts.texto,
    width: "100%",
    maxWidth: 195,
    textAlign: "center"
  }
});

export default styles;
