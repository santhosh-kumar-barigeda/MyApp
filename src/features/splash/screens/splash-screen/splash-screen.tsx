import { Button, Text, View } from 'react-native';

import { navigationService } from '@/shared/lib/navigation-service';

import { useSplashScreenStyles } from './splash-screen.styles';

export function SplashScreen() {
  const { styles } = useSplashScreenStyles();

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
      <Button
        title="Go to Onboarding"
        onPress={() => navigationService.navigate('OnboardingStack')}
      />
    </View>
  );
}
