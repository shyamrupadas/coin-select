import { useDispatch, useSelector } from 'react-redux';
import { Select } from '../../shared';
import { getDirectionsTo } from '../../store/directionSelectors';
import { setCurrentDirectionFrom } from '../../store/directionSlice';

export function ToDirectionSelect() {
  const options = useSelector(getDirectionsTo);

  const handleChange = (direction: string) => {
    // Just add busines logic you want
    console.log(`set direction: ${direction}`);
  };

  return <Select onChange={handleChange} options={options} />;
}
