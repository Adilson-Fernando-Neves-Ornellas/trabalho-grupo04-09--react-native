import { StyleSheet, Platform } from "react-native";
import fonts from "../../styles/theme/fonts";
import colors from "../../styles/theme/colors";

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android:{
        flex: 1,
        backgroundColor: '#9c1304',    
        alignItems: 'center',
        flexDirection: "column",
        alignContent: "center",
        
      },
      ios:{
        flex: 1,
        backgroundColor: '#9c1304',    
        alignItems: 'center',
        flexDirection: "column",
        alignContent: "center",
        
      },
      default:{
        flex: 1,
        backgroundColor: '#9c1304',    
        alignItems: 'center',
        flexDirection: "column",
        alignContent: "center",
        
      }
    })
  },
  logo: {
    ...Platform.select({
      android:{
        width: 300,
        height: 150,
        marginTop: 75,
        
      },
      ios:{
        flex: 1,
        width: 300,
        height: 150,
        marginTop: 75,
        
      },
      default:{
        width: 300,
        height: 150,
        marginTop: 75,
        
      }
    })
    
  },
  signupText: {
    ...Platform.select({
      android:{
        
        color: colors.yellowPrimary,
        marginTop: 10,
        fontFamily: fonts.texto,
        width: '100%',
        fontSize: 16,
        textAlign: 'center'
      },
      ios:{
        color: colors.yellowPrimary,
        marginTop: 10,
        fontFamily: fonts.texto,
        width: '100%',
        fontSize: 16,
        textAlign: 'center'
        
      },
      default:{
        color: colors.yellowPrimary,
        marginTop: 10,
        fontFamily: fonts.texto,
        width: '100%',
        fontSize: 16,
        textAlign: 'center'
        
      }
    })
  },
  viewContent: {
    ...Platform.select({
      android:{
        paddingTop: 35,
        flexDirection: 'column',
        alignItems: 'center',
        
      },
      ios:{
        paddingTop: 35,
        flexDirection: 'column',
        alignItems: 'center',
        
      },
      default:{
        paddingTop: 35,
        flexDirection: 'column',
        alignItems: 'center',
  
      }
    })
    
  },
  
});

export default styles;

