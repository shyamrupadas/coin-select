import { useSelector } from 'react-redux';
import { FilterType } from '../../App';
import { getCategories, getCategoryIds } from '../../store/directionSelectors';
import { ICategoryId, IDirection } from '../../store/directionSlice';
import { DirectionSelect } from '../DirectionSelect';
import { FilterButtons } from '../FilterButtons';
import s from './Panel.module.scss';

interface IPanel {
  onClick: (id: FilterType) => void;
  currentCategory: ICategoryId;
  onChange: () => void;
  options: string[];
}

export function Panel({ onClick, currentCategory, onChange, options }: IPanel) {
  const categoryIds = useSelector(getCategoryIds);
  const categories = useSelector(getCategories);

  return (
    <>
      <header>
        <h3 className={s.header}>Отдаете</h3>
      </header>
      <div className={s.buttons}>
        <FilterButtons
          onClick={onClick}
          ids={categoryIds}
          currentCategory={currentCategory}
          categories={categories}
        />
      </div>
      <div className={s.select}>
        <input type="text" />
        <DirectionSelect optionIds={options} onChange={onChange} />
      </div>
    </>
  );
}
