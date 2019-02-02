import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

const userPost = ({height, ratio}) => (
  <Fragment>
     <View style={{ width: '100%', height: height / ratio, backgroundColor: 'gray' }} />
     <View style={styles.likeContainer}>
         <Ionicons name="md-heart-empty" size={28} />
         <Text style={styles.dateTimeText}>14th Sep, 11:00AM</Text>
     </View>
  </Fragment>
); 

export default userPost;