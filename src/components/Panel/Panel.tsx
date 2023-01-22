import { useSelector } from "react-redux";
import { getCategories, getCategoryIds } from "../../store/directionSelectors";
import { FilterButtons } from "../FilterButtons";

export const Panel = () => {
  const categoryIds = useSelector(getCategoryIds);
  const categories = useSelector(getCategories);

  return (
    <>
      hello
      // <header>
      //   <h3 className={s.header}>Отдаете</h3>
      // </header>
      // <div className={s.buttons}>
      //   <FilterButtons
      //     onClick={handleFromButtonClick}
      //     ids={categoryIds}
      //     currentCategory={currentCategoryFrom}
      //     categories={categories}
      //   />
      // </div>
      // <div className={s.select}>
      //   <input type="text" />
      //   <select
      //     // value={selected}
      //     onChange={(e) => {
      //       setSelected(e.target.value);
      //       resetFilterTo();
      //     }}
      //   >
      //     {filteredOptionsFrom.map((direction) => (
      //       <option key={direction.code} value={direction.code}>
      //         {direction.name}
      //       </option>
      //     ))}
      //   </select>
      // </div>
    </>
  );
};
