import type { LucideIcon } from 'lucide-react-native';
import { Home, ShoppingCart, User } from 'lucide-react-native';
import { Tabs } from '../types';
import HomeScreen from '@/screens/HomeScreen';
import { CartScreen } from '@/screens/CartScreen';
interface BottomTabBarItem {
  label: string;
  icon: LucideIcon;
  name: keyof Tabs;
  screen: React.ComponentType;
}
export const BottomTabBarData: BottomTabBarItem[] = [
  {
    label: 'Home',
    icon: Home,
    name: 'HomeScreen',
    screen: HomeScreen,
  },
  {
    label: 'Cart',
    icon: ShoppingCart,
    name: 'CartScreen',
    screen: CartScreen,
  },
  {
    label: 'Profile',
    icon: User,
    name: 'ProfileScreen',
    screen: HomeScreen,
  },
];
