import { StyleSheet, Platform } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

const styles = StyleSheet.create({
  containerCards: {
    ...Platform.select({
      android: {
        margin: 10,
        backgroundColor: colors.blackPrimary,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        maxHeight: '67%',
      },
      ios: {
        margin: 10,
        backgroundColor: colors.blackPrimary,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        maxHeight: '67%',
        
      },
      default: {
        margin: 10,
        backgroundColor: colors.blackPrimary,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        maxHeight: '67%',

      }
    })
    
  },
  cardCarrosel: {
    ...Platform.select({
      android: {
        padding: 10,
      },
      ios: {
        padding: 10,
        
      },
      default: {
        padding: 10,
        
      }
    })
  },
  div: {
    ...Platform.select({
      android: {
        width: "50%",
        marginBottom: 15,
        alignItems: "center",
        
      },
      ios: {
        width: "50%",
        marginBottom: 15,
        alignItems: "center",
        
      },
      default: {
        width: "50%",
        marginBottom: 15,
        alignItems: "center",
        
      }
    })
  },
  textCard: {
    ...Platform.select({
      android: {
        justifyContent:'center',
        color: colors.yellowPrimary,
        fontSize: 16,
        fontFamily: fonts.texto,
        
      },
      ios: {
        justifyContent:'center',
        color: colors.yellowPrimary,
        fontSize: 16,
        fontFamily: fonts.texto,
        
      },
      default: {
        justifyContent:'center',
        color: colors.yellowPrimary,
        fontSize: 16,
        fontFamily: fonts.texto,
        
      }
    })
  },
  textCardNotFound: {
    ...Platform.select({
      android: {
        textAlign:'center',
        color: colors.yellowPrimary,
        fontSize: 22,
        fontFamily: fonts.texto,
        width:'100%',
        
      },
      ios: {
        textAlign:'center',
        color: colors.yellowPrimary,
        fontSize: 22,
        fontFamily: fonts.texto,
        width:'100%',
        
      },
      default: {
        textAlign:'center',
        color: colors.yellowPrimary,
        fontSize: 22,
        fontFamily: fonts.texto,
        width:'100%',
        
      }
    })
  },
});

export default styles;
