import { StyleSheet } from 'react-native';
import fonts from '../../styles/theme/fonts';
import colors from '../../styles/theme/colors';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.redBackground,
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
    borderColor: colors.blackPrimary,
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor:colors.blackPrimary,
    color: colors.yellowInput,
    fontFamily: fonts.texto,
    width:200,
  },
  button: {
    backgroundColor: colors.bluePrimary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 10,
    width:200,
    height:60,
  },
  textButton: {
    color: colors.yellowPrimary,
    fontFamily: fonts.texto,
    fontSize: 36
  }
});

export default styles;