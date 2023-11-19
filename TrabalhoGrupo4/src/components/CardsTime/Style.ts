import { StyleSheet } from 'react-native';
import colors from '../../styles/theme/colors';
import fonts from '../../styles/theme/fonts';

const Styles = StyleSheet.create({
  containerCards:{
    margin: 30,
    backgroundColor: colors.blackPrimary,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
 },
  cardCarrosel:{
    padding: 10,

  },
  div:{
    width: 155,
    marginBottom: 15,
    // marginLeft: 15,
    display: "flex",
    alignItems:'center',
    justifyContent:'center'
  },
  textcard:{
    marginTop: 8,
    color: colors.yellowPrimary,
    fontSize: 16,
    fontFamily: fonts.texto
  }
});

export default Styles;