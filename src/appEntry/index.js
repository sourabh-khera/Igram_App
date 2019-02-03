import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { connect } from 'react-redux';
import { saveUserToken } from '../actions/user.action';
import TabNavigator from '../navigations/tab_navigation';
import LoginScreen from '../screens/login';
import Loader from '../components/loader';

class AppEntry extends Component {
    
   state = { isLoading: false };
   
   async componentDidMount() {
      const { saveUserLoginStatus } = this.props;
      this.setState({isLoading: true});
      const auth = await AsyncStorage.getItem('isAuth');
      this.setState({isLoading:false});
      JSON.parse(auth) ? saveUserLoginStatus(JSON.parse(auth)) : saveUserLoginStatus(false);
   }

  render() {
     const { isLoading } = this.state; 
     const { authenticated } = this.props;
     const renderScreen  = authenticated ? <TabNavigator /> : <LoginScreen />
     const renderComponent = isLoading ? <Loader moveLeft={38} moveTop={40} /> : renderScreen
  return (
      <View style={{flex: 1}}>
         {renderComponent}
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