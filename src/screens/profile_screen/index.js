import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { clearToken } from '../../actions/user.action';
import { getPixelRatio, getImageWidthAndHeight } from '../../utils/commonFuncions';
import LinearGradientButton from '../../components/lineraGradientButton';
import styles from './style';

class ProfileScreen extends Component {
  handleLogout = async () => {
    const { clearUserToken } = this.props;
    await AsyncStorage.removeItem('isAuth');
    clearUserToken();
  } 
  render() {
       const ratio = getPixelRatio();
       const imageAttributes = getImageWidthAndHeight(200,200);
    return (
      <View style={styles.profileScreenContainer}>
         <View style={{height: imageAttributes.height / ratio  , width: imageAttributes.width / ratio, ...styles.profileImageContainer}} />
         <Text style={styles.userNameText}>Sourabh Khera</Text>
         <Text style={styles.emailText}>sourabh.khera@tothenew.com</Text>
         <LinearGradientButton
           buttonText="Logout"
           buttonStyles={{width: '80%', marginTop: 50}}
           handleLogout={this.handleLogout}
         />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clearUserToken: () => dispatch(clearToken()),
});
export default connect(null, mapDispatchToProps)(ProfileScreen);