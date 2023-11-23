import { StyleSheet, Platform } from 'react-native';
import fonts from '../../styles/theme/fonts';
import colors from '../../styles/theme/colors';

const styles = StyleSheet.create({
  viewContainer: {
    ...Platform.select({
      android:{
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
  text: {
    ...Platform.select({
      android:{
        textAlign: 'center',
        fontSize: 16,
        fontFamily: fonts.texto,
        color: colors.yellowPrimary,
        paddingTop: 15,
        width: '100%',
        
      },
      ios:{
        textAlign: 'center',
        fontSize: 16,
        fontFamily: fonts.texto,
        color: colors.yellowPrimary,
        paddingTop: 15,
        width: '100%',
        
      },
      default:{
        textAlign: 'center',
        fontSize: 16,
        fontFamily: fonts.texto,
        color: colors.yellowPrimary,
        paddingTop: 15,
        width: '100%',
  
      }
    })
  },
  logo:{
    ...Platform.select({
      android:{
        paddingTop: 75,
        width: 300, 
        height: 150 
        
      },
      ios:{
        paddingTop: 75,
        width: 300, 
        height: 150 
        
      },
      default:{
        paddingTop: 75,
        width: 300, 
        height: 150 
    
      }
    })
  }
});

export default styles;