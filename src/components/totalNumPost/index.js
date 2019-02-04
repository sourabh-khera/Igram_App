import React from 'react';
import { Text, View, Image } from 'react-native';
import { getImageWidthAndHeight, getPixelRatio } from '../../utils/commonFuncions';
import styles from './style';

const totalNumberofPosts = ({height, width, url, ratio, nameStyles, postCountStyles, userName, postCount}) => {
  return (
    <View style={styles.thumbnailContainer}>
      <Image source={{uri: url}} style={{height: height/ ratio, width: width / ratio}} borderRadius={50}/>
      <View>
         <Text style={[styles.defaultNameText, {...nameStyles}]}>{userName}</Text> 
         <Text style={[styles.defaultPostCount, {...postCountStyles}]}>{`${postCount} Posts`}</Text>
      </View>
    </View>
  )
} 
   
export default totalNumberofPosts;