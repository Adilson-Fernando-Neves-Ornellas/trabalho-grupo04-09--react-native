import { StyleSheet } from "react-native";
import fonts from "../../styles/theme/fonts";
import colors from "../../styles/theme/colors";

export const styles = StyleSheet.create({
  viewContainer: {
        flex: 1,
        flexDirection: "row",
        width: "25%",
        marginTop: 20,
        marginLeft: 30,
        justifyContent: "flex-start",
    
  },
  viewDetails: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: colors.redHeader,
        width: "45%",
        margin: 5,
  },
  img: {
        height: 10,
        width: "15%",
        resizeMode: "center",
  },
  titleNome: {
        fontWeight:'bold',
        fontStyle: "italic",
        fontSize: 16,
        fontFamily:fonts.texto,
        color:colors.yellowPrimary
  },
});
