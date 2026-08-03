import BootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Navigation } from '@/app/navigation';
import { navigationRef } from '@/shared/lib/navigation-service';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation
        ref={navigationRef}
        onReady={() => {
          BootSplash.hide({ fade: true });
        }}
      />
    </GestureHandlerRootView>
  );
}
