import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,  
  },
  thumbnailContainer: {
    flexDirection: 'row', 
    alignItems: "center", 
    paddingTop: 10, 
    paddingBottom: 10,
  },  
  dateTimeText: {
    fontWeight: 'bold', 
    fontSize: 12, 
    fontFamily: 'Helvetica',
  },
  nameText: {
    fontSize: 15, 
    marginLeft: 10, 
    fontWeight: 'bold', 
  },
  thumbNail: {
    marginLeft: 10,
    borderRadius: 100/0.5,
    backgroundColor: 'green',
  },
  likeContainer: {
    flexDirection: 'row', 
    alignItems: "center", 
    paddingTop: 10, 
    paddingBottom: 10, 
    justifyContent: 'space-between', 
    marginLeft: 12, 
    marginRight: 12,  
  }

});

export default styles;