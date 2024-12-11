import {StyleSheet} from 'react-native';
import { ThemeColors } from '../theme/colors';

const defaultScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: ThemeColors.white,
  // center align the text horizontally and vertically in the view.
  },
});

export default defaultScreenStyle;
