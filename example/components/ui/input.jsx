import {StyleSheet, Text, TextInput, View} from 'react-native';
import { ThemeColors } from '../../theme/colors';
import style from '../../styles/input';



const Input = props => {
  const {title} = props;
  return (
    <View style={style.container}>
      <Text style={style.title}>{title} </Text>
      <TextInput style={style.input} {...props} />
    </View>
  );
};

export default Input;


