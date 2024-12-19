import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import NewHot from '../screens/newHot';
import Search from '../screens/search';
import DownLoad from '../screens/downloads';
import {DOWNLOADS, HOME, NEWHOT, SEARCH} from '../utils/routes';
import {ThemeColors} from '../theme/ThemeColors';
import TabBarIcon from '../components/router/TabBarIcon';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerStyle: {
        backgroundColor: ThemeColors.black,
      },
      headerTintColor: ThemeColors.white,
      tabBarStyle: {
        backgroundColor: ThemeColors.black,
      },
      tabBarActiveTintColor: ThemeColors.white,
      tabBarInactiveTintColor: ThemeColors.white,
      tabBarIcon: ({ focused, color, size }) => (
        <TabBarIcon focused={focused} color={color} size={size} route={route} />
   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      ),
    })}
    
      >
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={NEWHOT} component={NewHot} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={DOWNLOADS} component={DownLoad} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
