import { useDispatch, useSelector } from 'react-redux';
import { FilterButtons } from '../../entities/FilterButtons';
import {
  getCategories,
  getCategoryIds,
  getCurrentCategoryFrom,
} from '../../store/directionSelectors';
import { setCurrentCategoryFrom } from '../../store/directionSlice';

export function FromFilterButtons() {
  const categoryIds = useSelector(getCategoryIds);
  const categories = useSelector(getCategories);
  const currentCategoryFrom = useSelector(getCurrentCategoryFrom);

  const dispatch = useDispatch();

  const handleFromButtonClick = (id: string) => {
    dispatch(setCurrentCategoryFrom(id));
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
