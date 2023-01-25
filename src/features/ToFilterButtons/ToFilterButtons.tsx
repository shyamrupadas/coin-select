import { useDispatch, useSelector } from 'react-redux';
import { FilterButtons } from '../../entities/FilterButtons';
import {
  getCategories,
  getCategoryIds,
  getCurrentCategoryTo,
} from '../../store/directionSelectors';
import { setCurrentCategoryTo } from '../../store/directionSlice';

export function ToFilterButtons() {
  const categoryIds = useSelector(getCategoryIds);
  const categories = useSelector(getCategories);
  const currentCategoryFrom = useSelector(getCurrentCategoryTo);

  const dispatch = useDispatch();

  const handleFromButtonClick = (id: string) => {
    dispatch(setCurrentCategoryTo(id));
  };

  return (
    <FilterButtons
      onClick={handleFromButtonClick}
      ids={categoryIds}
      currentCategory={currentCategoryFrom}
      categories={categories}
    />
  );
}
