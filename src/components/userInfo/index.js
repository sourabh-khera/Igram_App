import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const userInfo = ({height, width, ratio}) => (
    <View style={styles.thumbnailContainer}>
        <View style={{...styles.thumbNail, height: height/ ratio, width: width / ratio}}/>
        <Text style={styles.nameText}>Sourabh Khera</Text>
    </View>
);

export default userInfo;
