import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserScreen } from '@/features/user/screens';

export const UserStack = createNativeStackNavigator({
  screenOptions: { headerShown: false },
  screens: {
    User: UserScreen,
  },
});
