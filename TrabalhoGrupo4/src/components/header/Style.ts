import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  containerheader:{
    backgroundColor:"#5F0900",
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