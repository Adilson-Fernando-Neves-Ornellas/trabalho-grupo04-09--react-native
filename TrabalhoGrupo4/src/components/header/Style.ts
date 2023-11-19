import { StyleSheet } from 'react-native';
import colors from '../../styles/theme/colors';

const Styles = StyleSheet.create({
  containerheader:{
    backgroundColor: colors.redHeader ,
    maxHeight:61,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent:"space-between",
    padding: 5,
  },
  imgHeader:{
    width: 100,
    height: 50
  }
});

export default Styles;