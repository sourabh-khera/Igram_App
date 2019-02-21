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
      const { saveUserToken } = this.props;
      this.setState({isLoading: true});
      const token = await AsyncStorage.getItem('token');
      this.setState({isLoading:false});
      token ? saveUserToken(token) : saveUserToken('');
   }

  render() {
     const { isLoading } = this.state; 
     const { token } = this.props;
     const renderScreen  = token ? <TabNavigator /> : <LoginScreen />
     const renderComponent = isLoading ? <Loader moveLeft={38} moveTop={40} /> : renderScreen
  return (
      <View style={{flex: 1}}>
         {renderComponent}
      </View>
   );
 }
}

const mapStateToProps = state => ({
  token: state.userReducer.token,
});
const mapDispatchToProps = dispatch => ({
   saveUserToken: token => dispatch(saveUserToken(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppEntry);