import { FromDirectionSelect } from '../../features/FromDirectionSelect';
import { FromFilterButtons } from '../../features/FromFilterButtons';
import s from './PanelFrom.module.scss';

export function PanelFrom() {
  return (
    <>
      <header className={s.header}>
        <h3>Отдаете</h3>
      </header>
      <FromFilterButtons />
      <div className={s.select}>
        <input type="text" />
        <FromDirectionSelect />
      </div>
    </>
  );
}
