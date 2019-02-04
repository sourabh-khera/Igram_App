import React from 'react';
import { Text, View } from 'react-native';
import { getImageWidthAndHeight, getPixelRatio } from '../../utils/commonFuncions';
import styles from './style';

const totalNumberofPosts = ({height, width, ratio, nameStyles, postCountStyles, userName, postCount}) => {
  return (
    <View style={styles.thumbnailContainer}>
      <View style={{...styles.thumbNail, height: height / ratio, width: width / ratio}}/>
      <View>
         <Text style={[styles.defaultNameText, {...nameStyles}]}>{userName}</Text> 
         <Text style={[styles.defaultPostCount, {...postCountStyles}]}>{`${postCount} Posts`}</Text>
      </View>
    </View>
  )
} 
   
export default totalNumberofPosts;