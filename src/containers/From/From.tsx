import { useDispatch, useSelector } from 'react-redux';
import { FilterType } from '../../App';
import { Panel } from '../../components/Panel';
import {
  // getCategories,
  // getCategoryIds,
  getCurrentCategoryFrom,
  getDirectionsFrom,
} from '../../store/directionSelectors';
import { setCurrentCategoryFrom } from '../../store/directionSlice';

export function From() {
  // const categoryIds = useSelector(getCategoryIds);
  // const categories = useSelector(getCategories);

  console.log(directionsFrom);

  return (
    <div>
      <Panel
        onClick={handleFromButtonClick}
        currentCategory={currentCategoryFrom}
        onChange={handleChange}
        options={directionsFrom}
      />
    </div>
  );
}
