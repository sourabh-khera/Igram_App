import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userListContainer: {
      borderColor: '#eee', 
      borderWidth: 1,
      flexDirection: 'row',  
      justifyContent: 'space-between', 
      alignItems: 'center',
      paddingVertical: 15
    },
    userName: {
      fontSize: 15, 
      marginLeft: 10,
    },
});

export default styles;