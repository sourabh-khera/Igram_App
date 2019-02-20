import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const buttonWithOpacity = ({ buttonText, buttonStyles, buttonTextStyles, handleButtonClick }) => (
    <TouchableOpacity style={[styles.buttonDefaultStyles, {...buttonStyles}]} onPress={() => handleButtonClick()}>
        <Text style={[styles.buttonTextDefaultStyles, {...buttonTextStyles}]}>
            {buttonText}
        </Text>
    </TouchableOpacity>
);

buttonWithOpacity.defaultProps = {
   buttonText: 'Submit',
   handleButtonClick: ()=>{}, 
};

export default buttonWithOpacity;