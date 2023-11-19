import { StyleSheet } from 'react-native';
import colors from '../../styles/theme/colors';
import fonts from '../../styles/theme/fonts';

const Styles = StyleSheet.create({
  containerCards:{
    margin: 30,
    backgroundColor: colors.blackPrimary,
    borderRadius: 8
  },
  cardCarrosel:{
    padding: 10,

  },
  div:{
    marginBottom: 15,
    display: "flex",
    gap: 10,
    flexDirection: "row"
  },
  textcard:{
    color: colors.yellowPrimary,
    fontSize: 16,
    fontFamily: fonts.texto
  },
  infoCard:{
    display: 'flex',
    flexDirection: 'column',
    gap: 5
  },
});

export default Styles;