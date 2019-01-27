import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { connect } from 'react-redux';
import { saveUserToken } from '../actions/user.action';
import TabNavigator from '../navigations/tab_navigation';
import LoginScreen from '../screens/login';

class AppEntry extends Component {

    async componentDidMount() {
       const { saveUserLoginStatus } = this.props;
       const auth = await AsyncStorage.getItem('isAuth');
       JSON.parse(auth) ? saveUserLoginStatus(JSON.parse(auth)) : saveUserLoginStatus(false);
    }
    
    render() {
       const { authenticated } = this.props;
       const renderScreen  = authenticated ? <TabNavigator /> : <LoginScreen />
       return (
           <View style={{flex: 1}}>
              {renderScreen}               
           </View>
       );
    }
}

const mapStateToProps = state => ({
  authenticated: state.userReducer.authenticated,
});
const mapDispatchToProps = dispatch => ({
  saveUserLoginStatus: auth => dispatch(saveUserToken(auth)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppEntry);