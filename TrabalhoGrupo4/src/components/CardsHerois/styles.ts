import { StyleSheet } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

const styles = StyleSheet.create({
  containerCards: {
    margin: 30,
    backgroundColor: colors.blackPrimary,
    borderRadius: 8,
  },
  cardCarrosel: {
    padding: 10,
    height: "80%",
  },
  div: {
    marginBottom: 15,
    display: "flex",
    gap: 10,
    flexDirection: "row",
  },
  textCard: {
    alignSelf: "center",
    color: colors.yellowPrimary,
    fontSize: 16,
    fontFamily: fonts.texto,
    width: "100%",
    textAlign: "center",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
});

export default styles;
