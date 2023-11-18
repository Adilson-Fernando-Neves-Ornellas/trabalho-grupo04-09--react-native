import { StyleSheet } from 'react-native';
import fonts from '../../styles/theme/fonts';
import colors from '../../styles/theme/colors';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewContent: {
    paddingTop: 75,
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.texto,
    color: colors.yellowPrimary,
    paddingTop: 15
  },
  logo:{
      paddingTop: 75,
      width: 300, 
      height: 150 
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor:"#fff"
  },
});

export default styles;