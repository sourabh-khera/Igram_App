import { StyleSheet } from 'react-native';

const styles  = StyleSheet.create({
  loaderContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'absolute',
    right: 0, 
    bottom: 0, 
    backgroundColor: '#000', 
    opacity: 0.5, 
    height: 90, 
    width: 90 , 
    borderRadius: 10  
  },
  loaderText: {
    color: '#fff', 
    marginTop: 10, 
    fontSize: 15, 
    fontFamily: 'Arial', 
    fontWeight: '300',
  },
});

export default styles;