import { StyleSheet } from "react-native";
import fonts from "../../styles/theme/fonts";
import colors from "../../styles/theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9c1304',    
    alignItems: 'center',
    flexDirection: "column",
    alignContent: "center",
  },
  logo: {
    width: 300,
    height: 150,
    marginTop: 75,
  },
  signupText: {
    color: colors.yellowPrimary,
    marginTop: 10,
    fontFamily: fonts.texto,
    width: '100%',
    fontSize: 16,
    textAlign: 'center'
  },
  viewContent: {
    paddingTop: 75,
    flexDirection: 'column',
    alignItems: 'center',
  
  },

});

export default styles;
