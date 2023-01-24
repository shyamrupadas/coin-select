import { FromDirectionSelect, ToFilterButtons } from '../../features';
import s from './PanelTo.module.scss';

export function PanelTo() {
  return (
    <>
      <header className={s.header}>
        <h3>Получаете</h3>
      </header>
      <ToFilterButtons />
      <div className={s.select}>
        <input type="text" />
        <FromDirectionSelect />
      </div>
    </>
  );
}
