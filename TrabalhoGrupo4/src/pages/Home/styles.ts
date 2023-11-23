import { StyleSheet, Platform } from 'react-native';
import colors from '../../styles/theme/colors';
import fonts from '../../styles/theme/fonts';


const styles = StyleSheet.create({
  containerHome:{
    ...Platform.select({
      android:{
        flex: 1,
        backgroundColor: colors.redBackground
        
      },
      ios:{
        flex: 1,
        backgroundColor: colors.redBackground
        
      },
      default:{
        flex: 1,
        backgroundColor: colors.redBackground
        
      }
    })
  },
  tituloPageHome: {
    ...Platform.select({
      android:{
        textAlign: 'center',
        fontSize: 24,
        color: colors.yellowPrimary,
        fontFamily: fonts.texto,
        marginTop: 20
        
      },
      ios:{
        textAlign: 'center',
        fontSize: 24,
        color: colors.yellowPrimary,
        fontFamily: fonts.texto,
        marginTop: 20
        
      },
      default:{
        textAlign: 'center',
        fontSize: 24,
        color: colors.yellowPrimary,
        fontFamily: fonts.texto,
        marginTop: 20
    
      }
    })
  }
});

export default styles;