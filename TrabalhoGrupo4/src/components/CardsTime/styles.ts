import { StyleSheet } from "react-native";
import colors from "../../styles/theme/colors";
import fonts from "../../styles/theme/fonts";

const styles = StyleSheet.create({
//   containerCards: {
//     margin: 10,
//     backgroundColor: colors.blackPrimary,
//     borderRadius: 8,
//     flexDirection: "row",
//     flexWrap: 'wrap',
//     rowGap: 20,
//     justifyContent: "space-between",
//     maxHeight: '67%',
//   },
//   cardCarrosel: {
//     padding: 10,
//   },
//   div: {
//     flexDirection: 'column',
//     marginLeft: 10,
//     marginBottom: 15,
//     alignItems: "center",
//   },
//   textCard: {
//     justifyContent:'center',
//     color: colors.yellowPrimary,
//     fontSize: 16,
//     fontFamily: fonts.texto,
//   },
  textCardNotFound: {
    textAlign:'center',
    color: colors.yellowPrimary,
    fontSize: 22,
    fontFamily: fonts.texto,
    width:'100%',  
  },
//   card: {
//     width: 110,
//     height: 200,
//     alignItems: 'center'
// },
  containerCards: {
    borderRadius: 8,
    margin: 10,
    backgroundColor: colors.blackPrimary,
    maxHeight: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10,
    columnGap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  cardCarrossel: {
    padding: 10,
  },
  card: {
    width: 110,
    height: 200,
    alignItems: 'center'
  },
  textCard: {
    justifyContent: 'center',
    color: colors.yellowPrimary,
    fontSize: 16,
    fontFamily: fonts.texto    
  }
});

export default styles;
