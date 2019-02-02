import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    thumbnailContainer: {
      flexDirection: 'row', 
      alignItems: "center", 
      paddingTop: 10, 
      paddingBottom: 10,
    },
    thumbNail: {
      marginLeft: 10,
      borderRadius: 100/0.5,
      backgroundColor: 'green',
    },  
    nameText: {
      fontSize: 15, 
      marginLeft: 10, 
      fontWeight: 'bold', 
    },
});

export default styles;