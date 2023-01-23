import { useDispatch, useSelector } from 'react-redux';
import { FilterType } from '../../App';
import { DirectionSelect, FilterButtons } from '../../features';
import {
  getCategories,
  getCategoryIds,
  getCurrentCategoryFrom,
  getDirectionsFrom,
} from '../../store/directionSelectors';
import {
  ICategoryId,
  IDirection,
  setCurrentCategoryFrom,
} from '../../store/directionSlice';
import s from './PanelFrom.module.scss';

export function PanelFrom() {
  const currentCategoryFrom = useSelector(getCurrentCategoryFrom);
  const directionsFrom = useSelector(getDirectionsFrom);
  const categoryIds = useSelector(getCategoryIds);
  const categories = useSelector(getCategories);

  const dispatch = useDispatch();

  const handleFromButtonClick = (id: FilterType) => {
    // setFilterFrom(id);
    // resetFilterTo();
    // setSelected(fromItems[0].code);
    dispatch(setCurrentCategoryFrom(id));
  };

  const handleChange = () => {
    console.log('changeSelected');
  };

  return (
    <>
      <header>
        <h3 className={s.header}>Отдаете</h3>
      </header>
      <div className={s.buttons}>
        <FilterButtons
          onClick={handleFromButtonClick}
          ids={categoryIds}
          currentCategory={currentCategoryFrom}
          categories={categories}
        />
      </div>
      <div className={s.select}>
        <input type="text" />
        <DirectionSelect optionIds={directionsFrom} onChange={handleChange} />
      </div>
    </>
  );
}
