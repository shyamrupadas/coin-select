import { useSelector } from 'react-redux';
import { FromDirectionSelect } from '../../features/FromDirectionSelect';
import { FromFilterButtons } from '../../features/FromFilterButtons';
import { getDirectionsFrom } from '../../store/directionSelectors';
import s from './PanelFrom.module.scss';

export function PanelFrom() {
  const directionsFrom = useSelector(getDirectionsFrom);

  const handleChange = () => {
    console.log('changeSelected');
  };

  return (
    <>
      <header className={s.header}>
        <h3>Отдаете</h3>
      </header>
      <FromFilterButtons />
      <div className={s.select}>
        <input type="text" />
        <FromDirectionSelect
          optionIds={directionsFrom}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
