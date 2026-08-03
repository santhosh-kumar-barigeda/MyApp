import { StyleSheet } from 'react-native';

export function useSplashScreenStyles() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return {
    styles,
  };
}
