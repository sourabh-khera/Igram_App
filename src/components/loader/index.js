import React from 'react';
import { View, Text, ActivityIndicator, Dimensions } from 'react-native';
import styles from './style';

const { height, width } = Dimensions.get('window');
const top = height * 40/100;
const left = width * 38/100; 

const loader  = () => (
    <View style={{...styles.loaderContainer, top, left}}>
        <ActivityIndicator size="small" color="#fff" />
        <Text style={styles.loaderText}>Loading</Text>
    </View>
);

export default loader;