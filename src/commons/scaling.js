import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const fontScale = (size, factor = 0.5) =>
  parseInt(size + (horizontalScale(size) - size) * factor, 10);

export {horizontalScale, verticalScale, fontScale};
