import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthScreen } from '@/features/auth/screens';

export const AuthStack = createNativeStackNavigator({
  screenOptions: { headerShown: false },
  screens: {
    Auth: AuthScreen,
  },
});
