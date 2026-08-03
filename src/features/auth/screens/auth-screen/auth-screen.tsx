import { Button, Text, View } from 'react-native';

import { navigationService } from '@/shared/lib/navigation-service';

import { useAuthScreenStyles } from './auth-screen.styles';

export function AuthScreen() {
  const { styles } = useAuthScreenStyles();

  return (
    <View style={styles.container}>
      <Text>Auth Screen</Text>
      <Button
        title="Login"
        onPress={() => navigationService.navigate('UserStack')}
      />
    </View>
  );
}
