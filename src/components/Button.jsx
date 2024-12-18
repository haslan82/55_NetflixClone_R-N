import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { ThemeColors } from '../theme/ThemeColors';



const Button = props => {
  const {title, status} = props;
  const setColor = () => {
    switch (status) {
        case 'primary':
            return ThemeColors.red;
          case 'warning':
            return ThemeColors.white;
          case 'info':
            return ThemeColors.black;
    
          default:
            return ThemeColors.red;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title} </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 3,
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 10,
   
  },
  title: {
    color: ThemeColors.white,
    fontSize: 18,
    fontWeight: '500',
  },
});

