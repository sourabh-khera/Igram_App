import { StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    userNameError: {
      color: 'white', 
      fontSize: 15, 
      marginBottom: 10,
      fontWeight: "bold"
    },
    passWordError: {
      color: 'white', 
      fontSize: 15, 
      fontWeight: "bold"
    },
    bottomTextContainer: {
      flexDirection: 'row', 
      marginTop: 50
    },
    loginText: {
      color: '#fff', 
      fontWeight: "bold",
      fontFamily: 'Helvetica', 
    }
});

export default styles;
  