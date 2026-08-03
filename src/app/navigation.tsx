import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashStack } from './splash-stack';
import { OnboardingStack } from './onboarding-stack';
import { AuthStack } from './auth-stack';
import { UserStack } from './user-stack';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'SplashStack',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    SplashStack: SplashStack,
    OnboardingStack: OnboardingStack,
    AuthStack: AuthStack,
    UserStack: UserStack,
  },
});

export const Navigation = createStaticNavigation(RootStack);
