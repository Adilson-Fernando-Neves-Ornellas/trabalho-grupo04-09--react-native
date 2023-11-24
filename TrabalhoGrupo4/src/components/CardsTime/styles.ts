import { StyleSheet } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

const styles = StyleSheet.create({
  textCardNotFound: {
    textAlign: "center",
    color: colors.yellowPrimary,
    fontSize: 22,
    fontFamily: fonts.texto,
    width: "100%",
  },
  containerCards: {
    borderRadius: 8,
    margin: 10,
    backgroundColor: colors.blackPrimary,
    maxHeight: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 10,
    columnGap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  cardCarrossel: {
    padding: 10,
  },
  card: {
    width: 110,
    height: 200,
    alignItems: "center",
    marginLeft: 8,
  },
  textCard: {
    justifyContent: "center",
    color: colors.yellowPrimary,
    fontSize: 16,
    fontFamily: fonts.texto,
    textAlign: "center",
  },
});

export default styles;
