import { StyleSheet } from 'react-native';

export function useAuthScreenStyles() {
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
