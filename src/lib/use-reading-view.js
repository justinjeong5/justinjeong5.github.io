import { useSyncExternalStore } from 'react';
import { useSearchParams } from 'react-router-dom';

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function useReadingView() {
  const [params] = useSearchParams();
  const hydrated = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
  return hydrated ? params.get('view') : null;
}
