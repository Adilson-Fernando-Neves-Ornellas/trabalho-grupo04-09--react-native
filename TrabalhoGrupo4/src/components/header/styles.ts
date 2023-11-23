import { StyleSheet, Platform } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

const styles = StyleSheet.create({
  containerheader: {
    ...Platform.select({
      android:{
        backgroundColor: colors.redHeader,
        maxHeight: 61,
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
      },
      ios:{ 
        backgroundColor: colors.redHeader,
        maxHeight: 61,
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
      },
      default:{
        backgroundColor: colors.redHeader,
        maxHeight: 61,
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
      }
    })
  },
  imgHeader: {
    ...Platform.select({
      android:{
        width: 100,
        height: 50,
      },
      ios:{ 
        width: 100,
        height: 50,
      },
      default:{
        width: 100,
        height: 50,
      }
    })
  },
  textUser: {
    ...Platform.select({
      android:{
        color: colors.yellowPrimary,
        fontFamily: fonts.texto,
      },
      ios:{ 
        color: colors.yellowPrimary,
        fontFamily: fonts.texto,
      },
      default:{
        color: colors.yellowPrimary,
        fontFamily: fonts.texto,
      }
    })
  },
  containerUser: {
    ...Platform.select({
      android:{
        alignSelf: "center",
        width: 100,
      },
      ios:{ 
        alignSelf: "center",
        width: 100,
      },
      default:{
        alignSelf: "center",
        width: 100,
      }
    })
  },
  flyImg: {
    ...Platform.select({
      android:{
        resizeMode: 'contain',
        transform: [{rotateX: '15deg'}, {rotateZ: '0.5rad'}],
        width: 100,
        height: 50,
      },
      ios:{ 
        resizeMode: 'contain',
        transform: [{rotateX: '15deg'}, {rotateZ: '0.5rad'}],
        width: 100,
        height: 50,
      },
      default:{
        resizeMode: 'contain',
        transform: [{rotateX: '15deg'}, {rotateZ: '0.5rad'}],
        width: 100,
        height: 50,
      }
    })
  },
});

export default styles;

