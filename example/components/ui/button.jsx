import {Text, TouchableOpacity} from 'react-native';
import { ThemeColors } from '../../theme/colors';
import style from '../../styles/button';


const Button = props => {
  const {title, status} = props;
  const setColor = () => {
    switch (status) {
      case 'success':
        return ThemeColors.green;
      case 'warning':
        return ThemeColors.yellow;
      case 'info':
        return ThemeColors.lightPink;

      default:
        return ThemeColors.blue;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[style.container, {backgroundColor: setColor()}]}>
      <Text style={style.title}>{title} </Text>
    </TouchableOpacity>
  );
};

export default Button;

