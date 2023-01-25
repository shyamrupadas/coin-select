import { setData } from './store/directionSlice';
import { data } from './api';
import { PanelFrom } from './vidgets';
import { PanelTo } from './vidgets/PanelTo';

export type FilterType = 'all' | 'crypto' | 'bank' | 'cash';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(data));
  }, [dispatch]);
  return (
    <>
      <PanelFrom />
      <PanelTo />
    </>
  );
}
