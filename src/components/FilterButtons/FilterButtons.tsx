import { Button } from '../Button';
import { FilterType } from '../../App';
import { ICategories, ICategory } from '../../store/directionSlice';

interface IFilterButtons {
  onClick: (id: FilterType) => void;
  ids: FilterType[];
  currentCategory: ICategory;
  categories: ICategories;
}

export function FilterButtons({
  onClick,
  ids,
  currentCategory,
  categories,
}: IFilterButtons) {
  return (
    <>
      {ids.map((id) => (
        <Button
          key={id}
          onClick={() => onClick(id)}
          active={currentCategory === id}
        >
          {categories[id].label}
        </Button>
      ))}
    </>
  );
}
