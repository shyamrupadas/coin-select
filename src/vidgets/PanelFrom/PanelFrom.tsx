import { useDispatch, useSelector } from 'react-redux';
import { FilterType } from '../../App';
import { DirectionSelect } from '../../features';
import { FromFilterButtons } from '../../features/FromFilterButtons';
import {
  getCategories,
  getCategoryIds,
  getCurrentCategoryFrom,
  getDirectionsFrom,
} from '../../store/directionSelectors';
import { setCurrentCategoryFrom } from '../../store/directionSlice';
import s from './PanelFrom.module.scss';

export function PanelFrom() {
  const directionsFrom = useSelector(getDirectionsFrom);

  const handleChange = () => {
    console.log('changeSelected');
  };

  return (
    <>
      <header>
        <h3 className={s.header}>Отдаете</h3>
      </header>
      <div className={s.buttons}>
        <FromFilterButtons />
      </div>
      <div className={s.select}>
        <input type="text" />
        <DirectionSelect optionIds={directionsFrom} onChange={handleChange} />
      </div>
    </>
  );
}
