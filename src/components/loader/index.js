import React from 'react';
import { View, Text, ActivityIndicator, Dimensions } from 'react-native';
import styles from './style';

const { height, width } = Dimensions.get('window');

const loader  = ({ moveTop, moveLeft }) => {
    const top = height * moveTop/100;
    const left = width * moveLeft/100; 
    return( 
     <View style={{...styles.loaderContainer, top, left}}>
        <ActivityIndicator size="small" color="#fff" />
        <Text style={styles.loaderText}>Loading</Text>
     </View> 
    )
 };

export default loader;