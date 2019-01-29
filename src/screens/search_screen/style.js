import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchScreenContainer: {
      flex: 1,
  },
  searchTextInputContainer: {
    margin: 10,
  },
  searchTextInput: {
    width: '100%', 
    borderColor: '#eee',
    borderWidth: 1, 
    backgroundColor: '#eee',
  },
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