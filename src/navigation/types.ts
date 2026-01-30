export type AuthStackParamList = {
  LoginScreen: undefined;
};

export type Tabs = {
  HomeScreen: undefined;
  CartScreen: undefined;
  ProfileScreen: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
  SubmitOrder: undefined;
  ProductDetails: { productId: number };
};
