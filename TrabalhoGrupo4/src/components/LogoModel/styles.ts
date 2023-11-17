import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    flexGrow: 1,
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "#D4BF00",
    fontFamily: "Oswald-SemiBold",
    fontWeight: "bold",
    textAlign: "center",
  },
});
