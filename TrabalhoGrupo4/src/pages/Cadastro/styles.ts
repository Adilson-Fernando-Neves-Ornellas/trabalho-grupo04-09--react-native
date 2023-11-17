import { StyleSheet } from 'react-native';
import fonts from '../../styles/theme/fonts';
import colors from '../../styles/theme/colors';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.texto,
    color: colors.yellowPrimary,
  }
});

export default styles;