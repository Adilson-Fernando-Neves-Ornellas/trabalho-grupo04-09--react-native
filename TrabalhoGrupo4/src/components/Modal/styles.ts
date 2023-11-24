import { StyleSheet, Platform } from "react-native";
import colors from "../../styles/theme/colors";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.redBackground,
  },
  containerModal: {
    paddingTop:10,
    backgroundColor: colors.blackPrimary,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    width: "90%",
    height: "90%",
  },
  image: {
    resizeMode: "contain",
    width: "80%",
  },
});
