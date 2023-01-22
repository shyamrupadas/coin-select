import { useSelector } from 'react-redux';
import { getCategories, getCategoryIds } from '../../store/directionSelectors';
import { ICategory } from '../../store/directionSlice';
import { FilterButtons } from '../FilterButtons';
import s from './Panel.module.css';

interface IPanel {
  onClick: () => void;
  currentCategory: ICategory;
}

export function Panel({ onClick, currentCategory }: IPanel) {
  const categoryIds = useSelector(getCategoryIds);
  const categories = useSelector(getCategories);

  return (
    <>
      hello
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
    </>
  );
}
