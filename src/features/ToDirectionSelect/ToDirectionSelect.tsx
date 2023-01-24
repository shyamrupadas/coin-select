import { useSelector } from 'react-redux';
import { Select } from '../../shared';
import { getDirections, getDirectionsTo } from '../../store/directionSelectors';

export function ToDirectionSelect() {
  const ids = useSelector(getDirectionsTo);
  const options = useSelector(getDirections(ids));

  const handleChange = () => {
    console.log('changeSelected');
  };

  return <Select onChange={handleChange} options={options} />;
}
