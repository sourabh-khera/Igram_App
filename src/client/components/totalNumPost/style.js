import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  thumbnailContainer: {
    flexDirection: 'row', 
    alignItems: "center", 
    paddingTop: 20, 
    paddingBottom: 20,
    paddingLeft: 20,
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: 1,
  },  
  defaultNameText: {
    fontSize: 15, 
    marginLeft: 10, 
  },
  defaultPostCount: {
    marginLeft: 10, 
    fontWeight: 'bold'
  }
});

export default styles;