import { PixelRatio } from 'react-native'; 

export const getImageWidthAndHeight = (w, h) => {
    const image = {
        width: PixelRatio.getPixelSizeForLayoutSize(w),
        height: PixelRatio.getPixelSizeForLayoutSize(h),
    };
    return image;
}

export const getPixelRatio = () => {
  let pixelRatio = PixelRatio.get();
  return pixelRatio;  
};