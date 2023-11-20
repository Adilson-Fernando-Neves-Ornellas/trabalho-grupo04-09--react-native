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
  text: {
    textAlign: "center",
    fontSize: 18,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 80,
    marginBottom: 20, 
    width: '50%', 
  },

  buttonText: {
    color: '#d4bf00',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: '?',
  },
  signupText: {
    color: colors.yellowPrimary,
    marginTop: 10,
  },
  viewContent: {
    paddingTop: 75,
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: 'transparent', 
  },
  footerImage: {
    width: '100%', 
    height: 100, 
  },
});

export default styles;
