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
  const currentCategoryFrom = useSelector(getCurrentCategoryFrom);
  const directionsFrom = useSelector(getDirectionsFrom);

  console.log(directionsFrom);

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
    <Panel
      onClick={handleFromButtonClick}
      currentCategory={currentCategoryFrom}
      onChange={handleChange}
      options={directionsFrom}
    />
  );
}
