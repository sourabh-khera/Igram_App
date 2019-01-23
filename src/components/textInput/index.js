import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const textInput = ({ label, placeholderColor, maxLength, inputStyles, value, handleChangeText , secure}) => (
    <TextInput 
        placeholder={label}
        placeholderTextColor={placeholderColor}
        style={[styles.inputDefaultStyles, {...inputStyles}]}
        maxLength={maxLength}
        value={value}
        secureTextEntry={secure}
     />
)

textInput.defaultProps = {
  placeholderColor: '#f0beea',
  label: 'Enter',
  maxLength: 40,
  secure: false,
}
export default textInput;

