import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Tabs } from './types';
import { BottomTabBarData } from './data/bottomTabBar.data';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<Tabs>();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      {BottomTabBarData.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={() => null} // Placeholder component
          options={{
            tabBarLabel: item.label,
            tabBarIcon: ({ color, size }) => <item.icon color={color} size={size} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
