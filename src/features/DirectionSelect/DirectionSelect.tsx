import { useSelector } from 'react-redux';
import { Select } from '../../shared';
import { getDirections } from '../../store/directionSelectors';
import s from './DirectionSelect.module.scss';

interface DirectionSelectProps {
  onChange: () => void;
  optionIds: string[];
}

export function DirectionSelect({ onChange, optionIds }: DirectionSelectProps) {
  const options = useSelector(getDirections(optionIds));

  return (
    <div className={s.select}>
      <Select onChange={onChange} options={optionIds} />
    </div>
  );
}
