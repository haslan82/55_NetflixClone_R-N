import { StyleSheet} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { USERS } from '../utils/route';
import Users from '../screens/users';





const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name={USERS} component={Users} />
    
  </Stack.Navigator>
  )
}

export default RootNavigation;

const styles = StyleSheet.create({})