import { View, Text, Button } from 'react-native';
import { navigationService } from '@/shared/lib/navigation-service';
import { useOnboardingScreenStyles } from './onboarding-screen.styles';

export function OnboardingScreen() {
  const { styles } = useOnboardingScreenStyles();

  return (
    <View style={styles.container}>
      <Text>Onboarding Screen</Text>
      <Button
        title="Go to Auth"
        onPress={() => navigationService.navigate('AuthStack')}
      />
    </View>
  );
}
