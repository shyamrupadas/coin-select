import { useSelector } from 'react-redux';
import { Select } from '../../shared';
import {
  getDirections,
  getDirectionsFrom,
} from '../../store/directionSelectors';

export function FromDirectionSelect() {
  const ids = useSelector(getDirectionsFrom);
  const options = useSelector(getDirections(ids));

  const handleChange = () => {
    console.log('changeSelected');
  };

  return <Select onChange={handleChange} options={options} />;
}
