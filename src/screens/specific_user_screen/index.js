import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { getImageWidthAndHeight, getPixelRatio } from '../../utils/commonFuncions';
import TotalPostsCount from '../../components/totalNumPost';
import styles from './style';

class SpecificUserScreen extends Component {
  render() {
    const ratio = getPixelRatio();
    const profileImageAttributes = getImageWidthAndHeight(100, 100);
    return (
      <View style={styles.specificUserScreenContainer}>
         <TotalPostsCount
           height={profileImageAttributes.height}
           width={profileImageAttributes.width}
           ratio={ratio}
           userName='Sourabh Khera'
           postCount={12} 
          /> 
      </View>
    );
  }
}

export default SpecificUserScreen;