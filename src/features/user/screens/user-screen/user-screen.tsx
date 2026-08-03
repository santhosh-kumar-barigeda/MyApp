import { Button, Text, View } from 'react-native';

import { navigationService } from '@/shared/lib/navigation-service';

import { useUserScreenStyles } from './user-screen.styles';

export function UserScreen() {
  const { styles } = useUserScreenStyles();

  return (
    <View style={styles.container}>
      <Text>User Screen</Text>
      <Button
        title="Logout"
        onPress={() => navigationService.navigate('AuthStack')}
      />
    </View>
  );
}
