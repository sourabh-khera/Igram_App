import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

const userInfo = ({height, width, ratio, url, userName}) => (
    <View style={styles.thumbnailContainer}>
        <Image source={{uri: url}} style={{...styles.thumbNail, height: height/ ratio, width: width / ratio}} borderRadius={25}/>
        <Text style={styles.nameText}>{userName}</Text>
    </View>
);

export default userInfo;
