import { useSelector } from 'react-redux';
import { Select } from '../../shared';
import { getDirections } from '../../store/directionSelectors';

interface DirectionSelectProps {
  onChange: () => void;
  optionIds: string[];
}

export function FromDirectionSelect({
  onChange,
  optionIds,
}: DirectionSelectProps) {
  const options = useSelector(getDirections(optionIds));

  return <Select onChange={onChange} options={optionIds} />;
}
