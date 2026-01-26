import type { LucideIcon } from 'lucide-react-native';
import { Home, ShoppingCart, User } from 'lucide-react-native';
import { Tabs } from '../types';
interface BottomTabBarItem {
  label: string;
  icon: LucideIcon;
  name: keyof Tabs;
}
export const BottomTabBarData: BottomTabBarItem[] = [
  {
    label: 'Home',
    icon: Home,
    name: 'HomeScreen',
  },
  {
    label: 'Cart',
    icon: ShoppingCart,
    name: 'CartScreen',
  },
  {
    label: 'Profile',
    icon: User,
    name: 'ProfileScreen',
  },
];
