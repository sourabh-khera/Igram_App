import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getImageWidthAndHeight, getPixelRatio } from '../../utils/commonFuncions';
import styles from './style';

class HomeScreen extends Component {
  render() {
    const ratio = getPixelRatio();
    const profileImageAttributes = getImageWidthAndHeight(50, 50);
    const postImageAttributes = getImageWidthAndHeight(0, 250);  
    return (
      <View style={styles.homeScreenContainer}>
        <View style={styles.thumbnailContainer}>
           <View style={{...styles.thumbNail, height: profileImageAttributes.height / ratio, width: profileImageAttributes.width / ratio}}/>
           <Text style={styles.nameText}>Sourabh Khera</Text>
        </View>
        <View style={{width: '100%', height: postImageAttributes.height / ratio, backgroundColor: 'gray'}} />
        <View style={styles.likeContainer}>
          <Ionicons name="md-heart-empty" size={28} />
          <Text style={styles.dateTimeText}>14th Sep, 11:00AM</Text>
        </View>
      </View>
    );
  }
}

export default HomeScreen;