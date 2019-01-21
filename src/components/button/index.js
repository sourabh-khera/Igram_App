import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

const buttonWithOpacity = ({ buttonText, buttonStyles, buttonTextStyles }) => (
    <TouchableOpacity style={[styles.buttonDefaultStyles, {...buttonStyles}]}>
        <Text style={[styles.buttonTextDefaultStyles, {...buttonTextStyles}]}>
            {buttonText}
        </Text>
    </TouchableOpacity>
);

buttonWithOpacity.defaultProps = {
   buttonText: 'Submit' 
};

export default buttonWithOpacity;