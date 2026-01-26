import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { Tabs } from './types';

import { BottomTabBarData } from './data/bottomTabBar.data';
import { colors } from '@/theme';

const Tab = createBottomTabNavigator<Tabs>();

export function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'SignikaSemiBold',
        },
      }}>
      {BottomTabBarData.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.screen}
          options={{
            tabBarLabel: item.label,
            tabBarIcon: ({ color, size }) => <item.icon color={color} size={size} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
