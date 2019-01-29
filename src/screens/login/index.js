import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';
import { object, string } from 'yup';
import Button from '../../components/button';
import TextInput from '../../components/textInput';
import { saveUserToken } from '../../actions/user.action';
import { getImageWidthAndHeight, getPixelRatio } from '../../utils/commonFuncions';
import { Messages } from '../../constants';
import styles from './style';

class LoginScreen extends Component{
  state = {
    userName: '',
    password: '',
  };

  handleChange = (key, value) => {
    this.setState({[key]: value});
  };
  
  handleLogin = async (values, actions) => {
    if(values.password !== 'khera'){
      actions.setFieldError('password', 'Invalid Password');
    }else {
      const { saveUserLoginStatus } = this.props;
      await AsyncStorage.setItem('isAuth', 'true'); 
      saveUserLoginStatus(true);
    }
  }

  render() {
   const imageAttributes = getImageWidthAndHeight(100, 45);
   const ratio = getPixelRatio();
   const { userName, password } = this.state;
  
    return (
      <LinearGradient start={{x: 1, y: 1}} end={{x: 0,y: 1}}  colors={['#8c358e', '#b01e7a']} style={styles.container}>
        <Image source={require('../../../assets/images/igram_logo.png')} 
           style={
             {
               width: imageAttributes.width / ratio, 
               height: imageAttributes.height / ratio, marginBottom: 50
             }
          }
        />
        <Formik 
           initialValues={this.state}
           validationSchema={object().shape({
             userName: string().lowercase().trim().required(Messages.emptyUsername).test('user_name', Messages.wrongUsername, val => val === 'sourabh'),   
             password: string().lowercase().trim().required(Messages.emptyPassword),   
           })}
           onSubmit={(values, actions) => {this.handleLogin(values, actions)}}
        >   
           {({
             values,
             setFieldValue,
             handleSubmit,
             errors,
             touched
           }) => (
          <Fragment>
            <TextInput 
               label="Username"
               placeholderTextColor="#f0beea"
               value={values.userName}
               handleTextChange={value => {setFieldValue('userName', value)}}
               name="userName"
               keyboardType="email-address"
            />
            {touched.userName && errors.userName && <Text style={styles.userNameError}>{errors.userName}</Text>}
            <TextInput 
               label="Password"
               placeholderTextColor="#f0beea"
               maxLength={20}
               value={values.password}
               secure={true}
               name="password"
               handleTextChange={value => {setFieldValue('password', value)}}
            />
            {touched.password && errors.password && <Text style={styles.passWordError}>{errors.password}</Text>}
            <Button buttonText="Log In" handleButtonClick={handleSubmit}/>
          </Fragment>
           )}
        </Formik>
      </LinearGradient>
    );
  }
}

mapDispatchToProps = dispatch => ({
  saveUserLoginStatus: auth => dispatch(saveUserToken(auth)),
});
export default connect(null, mapDispatchToProps)(LoginScreen); 