import { StyleSheet } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

const styles = StyleSheet.create({
  containerheader: {
    backgroundColor: colors.redHeader,
    maxHeight: 61,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  imgHeader: {
    width: 100,
    height: 50,
  },
  textUser: {
    color: colors.yellowPrimary,
    fontFamily: fonts.texto,
  },
  containerUser: {
    alignSelf: "center",
    width: 100,
  },
  flyImg: {
    width: 100,
    height: 50,
  },
});

export default styles;
