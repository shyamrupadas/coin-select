import React, { FC } from "react";
import { Button } from "../Button";
import { FilterType } from "../../App";

interface IFilterButtons {
  onClick: (id: FilterType) => void;
  ids: string[];
  currentCategory: any;
  categories: any;
}

export const FilterButtons: FC<IFilterButtons> = ({
  onClick,
  ids,
  currentCategory,
  categories,
}) => {
  console.log("ids " + ids);
  console.log("current cat " + currentCategory);

  return (
    <>
      {ids.map((id: any) => (
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
};
