import { useDispatch, useSelector } from 'react-redux';
import { FilterType } from '../../App';
import { FromDirectionSelect, FromFilterButtons } from '../../features';
import {
  getCategories,
  getCategoryIds,
  getCurrentCategoryTo,
  getDirectionsFrom,
} from '../../store/directionSelectors';
import {
  setCurrentCategoryFrom,
  setCurrentCategoryTo,
} from '../../store/directionSlice';
import s from './PanelTo.module.scss';

export function PanelTo() {
  const currentCategoryFrom = useSelector(getCurrentCategoryTo);
  const directionsFrom = useSelector(getDirectionsFrom);
  const categoryIds = useSelector(getCategoryIds);
  const categories = useSelector(getCategories);

  const dispatch = useDispatch();

  const handleFromButtonClick = (id: FilterType) => {
    dispatch(setCurrentCategoryTo(id));
  };

  const handleChange = () => {
    console.log('changeSelected');
  };

  return (
    <>
      <header>
        <h3 className={s.header}>Получаете</h3>
      </header>
      <div className={s.buttons}>
        <FromFilterButtons />
      </div>
      <div className={s.select}>
        <input type="text" />
        <FromDirectionSelect
          optionIds={directionsFrom}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
