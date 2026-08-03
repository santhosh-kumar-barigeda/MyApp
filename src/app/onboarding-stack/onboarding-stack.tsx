import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingScreen } from '@/features/onboarding/screens';

export const OnboardingStack = createNativeStackNavigator({
  screenOptions: { headerShown: false },
  screens: {
    Onboarding: OnboardingScreen,
  },
});
