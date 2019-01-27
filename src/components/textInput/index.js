import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const textInput = (
  {
    label, 
    placeholderColor, 
    maxLength, 
    inputStyles, 
    value, 
    handleChangeText, 
    secure, 
    textColor, 
    handleTextChange,
    name,
    keyboardType,
  }) => (
    <TextInput 
        placeholder={label}
        placeholderTextColor={placeholderColor}
        style={[styles.inputDefaultStyles, {...inputStyles}]}
        maxLength={maxLength}
        value={value}
        color={textColor}
        secureTextEntry={secure}
        autoCapitalize={"none"}
        autoCorrect={false}
        selectionColor="#fff"
        onChangeText={(value)=>handleTextChange(value)}
        underlineColorAndroid="transparent"
        keyboardType={keyboardType}
     />
)

textInput.defaultProps = {
  placeholderColor: '#f0beea',
  label: 'Enter',
  maxLength: 40,
  secure: false,
  textColor: '#fff',
  keyboardType: "default"
}
export default textInput;

