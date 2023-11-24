import { StyleSheet } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

export const styles = StyleSheet.create({
  containerCards: {
    height: "30%",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  card: {
    width: 110,
    height: 180,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 3,
  },
  textCard: {
    color: colors.yellowPrimary,
    fontSize: 16,
    fontFamily: fonts.texto,
    width: "100%",
  },
});
