import { StyleSheet, Platform } from "react-native";
import colors from "../../styles/theme/colors";

export const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  img: {
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  logoText: {
    color: colors.yellowPrimary,
    fontWeight: "bold",
    textAlign: "center",
  },
});

