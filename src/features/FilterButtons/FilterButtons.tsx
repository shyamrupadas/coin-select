import { FilterType } from '../../App';
import { Button } from '../../shared';
import { ICategories, ICategoryId } from '../../store/directionSlice';

interface IFilterButtons {
  onClick: (id: FilterType) => void;
  ids: FilterType[];
  currentCategory: ICategoryId;
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
