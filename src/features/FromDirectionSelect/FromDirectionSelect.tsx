import { useDispatch, useSelector } from 'react-redux';
import { Select } from '../../shared';
import {
  getDirections,
  getDirectionsFrom,
} from '../../store/directionSelectors';
import { setCurrentDirectionFrom } from '../../store/directionSlice';

export function FromDirectionSelect() {
  const options = useSelector(getDirectionsFrom);

  const dispatch = useDispatch();

  const handleChange = (direction: string) => {
    dispatch(setCurrentDirectionFrom(direction));
  };

  return <Select onChange={handleChange} options={options} />;
}
