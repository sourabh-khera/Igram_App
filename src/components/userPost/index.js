import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

const userPost = ({height, ratio, url, createdAt}) => (
  <Fragment>
     <Image source={{uri: url}} style={{ width: '100%', height: height / ratio}} />
     {/* <View style={{ width: '100%', height: height / ratio, backgroundColor: 'gray' }} /> */}
     <View style={styles.likeContainer}>
         <Ionicons name="md-heart-empty" size={28} />
         <Text style={styles.dateTimeText}>{createdAt}</Text>
     </View>
  </Fragment>
); 

export default userPost;