import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  containerCards:{
    margin: 30,
    backgroundColor: "#1E1E1E",
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
    color: "#D4BF00",
    fontSize: 16,
  },
  infoCard:{
    display: 'flex',
    flexDirection: 'column',
    gap: 5
  },
});

export default Styles;