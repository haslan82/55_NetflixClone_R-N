import {Button, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';
import {ADDNEWLIST, GETSTARTED, SIGNIN, WATCHLIST} from '../utils/routes';
import SıgnIn from '../screens/signIn/SignIn';
import WatchList from '../screens/watchList';
import {ThemeColors} from '../theme/ThemeColors';
import {Edit2} from 'iconsax-react-native';
import AddNewList from '../screens/watchList/AddNewList';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTintColor: ThemeColors.white,
        headerStyle: {
          backgroundColor: ThemeColors.black,
        },
      })}>
      <Stack.Screen
        name={GETSTARTED}
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={SIGNIN} component={SıgnIn} />
      <Stack.Screen
        name={WATCHLIST}
        component={WatchList}
        options={{
          headerRight: () => <Edit2 
          onPress={()=> navigation.navigate(ADDNEWLIST)}
          size="32" color={ThemeColors.white} />,
        }}
      />
      <Stack.Screen name={ADDNEWLIST} component={AddNewList} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
