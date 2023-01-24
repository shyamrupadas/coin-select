import { useSelector } from 'react-redux';
import { DirectionSelect } from '../../features';
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
        <DirectionSelect optionIds={directionsFrom} onChange={handleChange} />
      </div>
    </>
  );
}
