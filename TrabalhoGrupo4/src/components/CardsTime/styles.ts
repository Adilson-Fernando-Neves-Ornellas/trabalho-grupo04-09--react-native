import { StyleSheet, Platform } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

const styles = StyleSheet.create({
  containerCards: {
    margin: 10,
    backgroundColor: colors.blackPrimary,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: '67%',
  },
  cardCarrosel: {
    padding: 10,
  },
  div: {
    flexDirection: 'column',
    marginLeft: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  textCard: {
    justifyContent:'center',
    color: colors.yellowPrimary,
    fontSize: 16,
    fontFamily: fonts.texto,
  },
  textCardNotFound: {
    textAlign:'center',
    color: colors.yellowPrimary,
    fontSize: 22,
    fontFamily: fonts.texto,
    width:'100%',  
  },
});

export default styles;
