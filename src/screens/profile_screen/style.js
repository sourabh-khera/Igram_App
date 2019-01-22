import { StyleSheet } from 'react-native';


const styles  = StyleSheet.create({
  profileScreenContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  profileImageContainer: {
    borderRadius: 100/0.5, 
    backgroundColor: '#ddd',
  },
  userNameText: {
    marginTop: 30, 
    fontSize: 25, 
    fontFamily: 'Helvetica',
  },
  emailText: {
    marginTop: 10, 
    fontSize: 16, 
    fontFamily: 'Helvetica', 
    color: '#c3c3c3',
  }
});

export default styles;