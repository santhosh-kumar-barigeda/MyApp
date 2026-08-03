import { StyleSheet } from 'react-native';

export function useUserScreenStyles() {
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
