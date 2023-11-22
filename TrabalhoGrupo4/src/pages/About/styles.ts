import { StyleSheet } from "react-native";
import fonts from "../../styles/theme/fonts";
import colors from "../../styles/theme/colors";

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.redBackground,
  },
  viewContent: {
    rowGap: 5,
    paddingTop: 0,
    alignItems: "center",
    
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: fonts.texto,
    color: colors.yellowPrimary,
    width: "100%",
    
  },
  logo: {
    paddingTop: 75,
    width: 300,
    height: 150,
    
  },
  buttonVoltar: {
    textAlign: "center",
    bottom:6,
    fontSize: 18,
    fontFamily: fonts.texto,
    color: colors.yellowPrimary,
    width: "100%",
    borderStyle:'solid',
    borderRadius:10,
    borderStartWidth:40,
    borderBottomWidth:2,
    backgroundColor:colors.bluePrimary,
  },
});

export default styles;
