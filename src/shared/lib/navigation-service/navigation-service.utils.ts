import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

import type { RootStackParamList } from '@/app/index.types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<
  RouteName extends Extract<keyof RootStackParamList, string>,
>(name: RouteName, params?: RootStackParamList[RouteName]) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(name, params));
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function reset(state: Parameters<typeof navigationRef.reset>[0]) {
  if (navigationRef.isReady()) {
    navigationRef.reset(state);
  }
}

export function getCurrentRoute() {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute();
  }
}
