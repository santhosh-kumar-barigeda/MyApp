import { Navigation } from '@/app/navigation';
import { navigationRef } from '@/shared/lib/navigation-service';

export default function App() {
  return <Navigation ref={navigationRef} />;
}
