import { useSelector } from 'react-redux';
import { getDirections } from '../../store/directionSelectors';
import { Select } from '../Select';
import s from './DirectionSelect.module.scss';

interface DirectionSelectProps {
  onChange: () => void;
  optionIds: string[];
}

export function DirectionSelect({ onChange, optionIds }: DirectionSelectProps) {
  const options = useSelector(getDirections(optionIds));

  return (
    <div className={s.select}>
      <Select onChange={onChange} options={options} />
    </div>
  );
}
