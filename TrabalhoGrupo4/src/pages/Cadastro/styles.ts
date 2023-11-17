import { StyleSheet } from 'react-native';
import fonts from '../../styles/theme/fonts';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1, 
  },
  viewContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  }
});

export default styles;