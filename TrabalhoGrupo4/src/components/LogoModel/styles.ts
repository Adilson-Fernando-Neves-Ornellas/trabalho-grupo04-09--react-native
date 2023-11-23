import { StyleSheet, Platform } from "react-native";
import colors from "../../styles/theme/colors";

export const styles = StyleSheet.create({
  logoContainer: {
    ...Platform.select({
      android:{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",
        
      },
      ios:{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",
        
      },
      default:{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",

      }
    })
  },
  img: {
    ...Platform.select({
      android:{
        width: 140,
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
      },
      ios:{
        width: 140,
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
        
      },
      default:{
        width: 140,
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
        
      }
    })
  },
  logoText: {
    ...Platform.select({
      android:{
        color: colors.yellowPrimary,
        fontWeight: "bold",
        textAlign: "center",
      },
      
      ios:{
        color: colors.yellowPrimary,
        fontWeight: "bold",
        textAlign: "center",
  
      },
      default:{
        color: colors.yellowPrimary,
        fontWeight: "bold",
        textAlign: "center",
  
      }
    })
  },
});

