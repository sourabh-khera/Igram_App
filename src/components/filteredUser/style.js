import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userListContainer: {
      borderColor: '#e6e6e6', 
      borderWidth: 1,
      flexDirection: 'row', 
      flex: 0.1, 
      justifyContent: 'space-between', 
      alignItems: 'center',
    },
    userName: {
      fontSize: 15, 
      marginLeft: 10,
    },
});

export default styles;