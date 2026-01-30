import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from './types';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],

  config: {
    screens: {
      Auth: {
        screens: {
          LoginScreen: 'login',
        },
      },

      App: {
        screens: {
          HomeScreen: 'home',
          CartScreen: 'cart',
          ProfileScreen: 'profile',
        },
      },

      SubmitOrder: 'submit-order',

      ProductDetails: {
        path: 'product/:productId',
        parse: {
          productId: Number,
        },
      },
    },
  },
};
