import { StyleSheet } from 'react-native';
import colors from '../../styles/theme/colors';

const Styles = StyleSheet.create({
  containerheader:{
    backgroundColor: colors.redHeader ,
    marginTop:30,
    maxHeight: 61,
    flex:1,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent:"space-between",
    padding: 5,
    gap:-100,
    resizeMode:'contain'
  },
  imgHeader:{
    width: 100,
    height: 50
  }
});

export default Styles;