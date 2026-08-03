import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Navigation } from '@/app/navigation';
import { navigationRef } from '@/shared/lib/navigation-service';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Navigation ref={navigationRef} />
    </GestureHandlerRootView>
  );
}
