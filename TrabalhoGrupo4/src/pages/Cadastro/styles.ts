import { StyleSheet } from 'react-native';
import fonts from '../../styles/theme/fonts';
import colors from '../../styles/theme/colors';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.redBackground,
  },
  viewContent: {
    paddingTop: 35,
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.texto,
    color: colors.yellowPrimary,
    paddingTop: 15,
    width: '100%',
  },
  logo:{
      paddingTop: 75,
      width: 300, 
      height: 150 
  }
});

export default styles;