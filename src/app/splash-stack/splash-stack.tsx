import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SplashScreen } from '@/features/splash/screens';

export const SplashStack = createNativeStackNavigator({
  screenOptions: { headerShown: false },
  screens: {
    Splash: SplashScreen,
  },
});
