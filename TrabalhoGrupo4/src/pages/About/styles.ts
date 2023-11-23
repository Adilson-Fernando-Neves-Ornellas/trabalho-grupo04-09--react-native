import { StyleSheet, Platform } from "react-native";
import fonts from "../../styles/theme/fonts";
import colors from "../../styles/theme/colors";

const styles = StyleSheet.create({
  viewContainer: {
    ...Platform.select({
      android: {
        flex: 1,
        backgroundColor: colors.redBackground,
        
      },
      ios:{
        flex: 1,
        backgroundColor: colors.redBackground,
        
      },
      default:{
        flex: 1,
        backgroundColor: colors.redBackground,
        
      }
    })
  },
  viewContent: {
    ...Platform.select({
      android: {
        rowGap: 5,
        paddingTop: 0,
        alignItems: "center",
        
      },
      ios:{
        rowGap: 5,
        paddingTop: 0,
        alignItems: "center",
        
      },
      default:{
        rowGap: 5,
        paddingTop: 0,
        alignItems: "center",
  
      }
    })
  },
  text: {
    ...Platform.select({
      android: {
        textAlign: "center",
        fontSize: 18,
        fontFamily: fonts.texto,
        color: colors.yellowPrimary,
        width: "100%", 
        
      },
      ios:{
        textAlign: "center",
        fontSize: 18,
        fontFamily: fonts.texto,
        color: colors.yellowPrimary,
        width: "100%", 
        
      },
      default:{
        textAlign: "center",
        fontSize: 18,
        fontFamily: fonts.texto,
        color: colors.yellowPrimary,
        width: "100%", 
  
      }
    })
  },
  logo: {
    ...Platform.select({
      android: {
        paddingTop: 75,
        width: 300,
        height: 150,
        
      },
      ios:{
        paddingTop: 75,
        width: 300,
        height: 150,
        
      },
      default:{
        paddingTop: 75,
        width: 300,
        height: 150,
  
      }
    })
  }
});

export default styles;

