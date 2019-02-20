import { StyleSheet } from 'react-native';

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
    },
    passWordError: {
      color: 'white', 
      fontSize: 15, 
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
  