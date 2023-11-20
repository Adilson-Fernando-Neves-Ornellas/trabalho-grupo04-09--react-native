import { StyleSheet } from "react-native";
import fonts from "../../styles/theme/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9c1304',
    justifyContent: 'center',    
    alignItems: 'center',
    width: "100%",
    flexDirection: "column",
    alignContent: "center",
    position: "absolute",
    marginBottom: 10,
    padding: 10,
    marginTop: 49
  },
  logo: {
    width: 210,
    height: 140,
    marginTop: 95,
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
    color: '#d4bf00',
    marginTop: 10,
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
