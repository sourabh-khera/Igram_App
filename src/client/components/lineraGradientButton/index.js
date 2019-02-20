import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from './style';

const linearGradientbutton = ({gradientColors, buttonText, buttonTextStyles, buttonStyles, handleLogout}) => {
    return (
        <LinearGradient
            start={{ x: 1, y: 1 }} end={{ x: 0, y: 1 }}
            colors={gradientColors}            
            style={[styles.buttonDefaultStyles, {...buttonStyles}]}
            onTouchStart={() => handleLogout()}
        >
          <Text style={[styles.buttonTextDefaultStyles, {...buttonTextStyles}]}>
             {buttonText}
          </Text>
        </LinearGradient>
    )
}

linearGradientbutton.defaultProps = {
  gradientColors: ['#8c358e', '#b01e7a'],
  handleLogout: () => {},       
};

export default linearGradientbutton;