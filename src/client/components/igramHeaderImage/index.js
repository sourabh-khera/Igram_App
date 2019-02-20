import React from 'react';
import { View, Image } from 'react-native';
import { getPixelRatio, getImageWidthAndHeight } from '../../../utils/commonFuncions';
import styles from './style';

const igramHeaderImage = () => {
   const ratio = getPixelRatio();
   const imageAttributes = getImageWidthAndHeight(63, 30);
   return (
          <Image source={require('../../../../assets/images/igram_logo_dark.png')} 
             style={
               {
                 width: imageAttributes.width / ratio, 
                 height: imageAttributes.height / ratio
               }
            }
          />       
   )
};

export default igramHeaderImage;