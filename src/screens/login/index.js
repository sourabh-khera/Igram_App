import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextInput from '../../components/textInput';
import Button from '../../components/button';
import { getImageWidthAndHeight, getPixelRatio } from '../../utils/commonFuncions';
import styles from './style';

export default class LoginScreen extends Component{
  state = {
    userName: '',
    password: '',
  };

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
        <TextInput 
           label="Username"
           placeholderTextColor="#f0beea"
           value={userName}
        />
        <TextInput 
           label="Password"
           placeholderTextColor="#f0beea"
           maxLength={20}
           value={password}
           secure={true}
        />
        <Button buttonText="Log In" />
      </LinearGradient>
    );
  }
}
