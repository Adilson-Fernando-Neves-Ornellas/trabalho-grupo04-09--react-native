import { StyleSheet, Platform } from "react-native";
import fonts from "../../styles/theme/fonts";
import colors from "../../styles/theme/colors";

export const styles = StyleSheet.create({
  viewContainer: {
    ...Platform.select({
      android: {
        flex: 1,
        flexDirection: "row",
        width: "25%",
        marginTop: 20,
        marginLeft: 30,
        justifyContent: "flex-start",
      },
      ios: {
        flex: 1,
        flexDirection: "row",
        width: "25%",
        marginTop: 20,
        marginLeft: 30,
        justifyContent: "flex-start",
      },
      default:{
        flex: 1,
        flexDirection: "row",
        width: "25%",
        marginTop: 20,
        marginLeft: 30,
        justifyContent: "flex-start",
      }
    })
    
  },
  viewDetails: {
    ...Platform.select({
      android: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: colors.redHeader,
        width: "45%",
        margin: 5,
      },
      ios: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: colors.redHeader,
        width: "45%",
        margin: 5,
      },
      default:{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: colors.redHeader,
        width: "45%",
        margin: 5,
      }
    })
  },
  img: {
    ...Platform.select({
      android: {
        height: 10,
        width: "15%",
        resizeMode: "center",
      },
      ios: {
        height: 10,
        width: "15%",
        resizeMode: "center",
      },
      default:{
        height: 10,
        width: "15%",
        resizeMode: "center",
      }
    })
  },
  titleNome: {
    ...Platform.select({
      android: {
        fontWeight:'bold',
        fontStyle: "italic",
        fontSize: 16,
        fontFamily:fonts.texto,
        color:colors.yellowPrimary
      },
      ios: {
        fontWeight:'bold',
        fontStyle: "italic",
        fontSize: 16,
        fontFamily:fonts.texto,
        color:colors.yellowPrimary
      },
      default:{
        fontWeight:'bold',
        fontStyle: "italic",
        fontSize: 16,
        fontFamily:fonts.texto,
        color:colors.yellowPrimary        
      }
    })
  },
});
