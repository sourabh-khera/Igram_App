import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, Image, AsyncStorage, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';
import { object, string } from 'yup';
import Button from '../../components/button';
import DismissKeyBoard from '../../components/dismissKeyboard';
import TextInput from '../../components/textInput';
import { saveUserToken } from '../../actions/user.action';
import { addUser, authenticateUser } from '../../actions/async.actions/user_async';
import { getImageWidthAndHeight, getPixelRatio } from '../../../utils/commonFuncions';
import { Messages } from '../../constants';
import styles from './style';

class LoginScreen extends Component{
  state = {
    userName: '',
    password: '',
    type: 'login'
  };

  handleLogin = async (values, actions) => {
    const { type } = this.state;
    const { createUser, userAdded, validateUser, authenticated } = this.props;
    if(type !== 'login'){
       createUser(values); 
       if(!userAdded)
         actions.setFieldError('userName', Messages.userExists); 
    } else {
      validateUser(values);
      if(!authenticated){
        actions.setFieldError('password', Messages.wrongDetails)
      }
    }
  }

  handleTextClick = () => {
    const { type } = this.state;
    const updateType = type === 'login' ? 'signup': 'login'
    this.setState({type: updateType});
    this.form.resetForm();
  }

  render() {
   const imageAttributes = getImageWidthAndHeight(100, 45);
   const ratio = getPixelRatio();
   const { userName, password, type } = this.state;
   const renderQuestionText = type === 'login' ? 'New to igram ? ' : 'Already a user ? ';
   const renderOptionText = type === 'login' ? 'Sign Up' : 'Login';
   const renderButtonText = type === 'login' ? 'Log In' : 'Sign Up';
    return (
     <DismissKeyBoard> 
      <LinearGradient start={{x: 1, y: 1}} end={{x: 0,y: 1}}  colors={['#8c358e', '#b01e7a']} style={styles.container}>
        <Image source={require('../../../../assets/images/igram_logo.png')} 
           style={
             {
               width: imageAttributes.width / ratio, 
               height: imageAttributes.height / ratio, marginBottom: 50
             }
          }
        />
        <Formik 
           ref={Formik => {this.form = Formik}}
           initialValues={this.state}
           validationSchema={object().shape({
             userName: string().lowercase().trim().required(Messages.emptyUsername),   
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
            <Button buttonText={renderButtonText} handleButtonClick={handleSubmit}/>
            <View style={styles.bottomTextContainer}>
               <Text style={styles.loginText}>{renderQuestionText}</Text>
               <TouchableOpacity onPress={this.handleTextClick}>
                 <Text style={styles.loginText}>{renderOptionText}</Text>
               </TouchableOpacity>
            </View>
          </Fragment>
           )}
        </Formik>
      </LinearGradient>
      </DismissKeyBoard>
    );
  }
}

mapStateToProps = state => ({
  userAdded: state.userReducer.userAdded,
  authenticated: state.userReducer.authenticated,
});
mapDispatchToProps = dispatch => ({
  saveUserLoginStatus: auth => dispatch(saveUserToken(auth)),
  createUser: userInfo => dispatch(addUser(userInfo)),
  validateUser: userInfo => dispatch(authenticateUser(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen); 