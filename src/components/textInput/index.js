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
    secure, 
    textColor, 
    handleTextChange,
    name,
    keyboardType,
    selectionColor,
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
        selectionColor={selectionColor}
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
  keyboardType: "default",
  selectionColor: '#fff'
}
export default textInput;

