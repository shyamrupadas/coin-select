import { RootState } from "./index";

export const getCurrentDirectionFrom = (state: RootState) =>
  state.directionSlice.currentDirectionFrom;

export const getCurrentCategoryFrom = (state: RootState) =>
  state.directionSlice.currentCategoryFrom;

export const getCurrentCategoryTo = (state: RootState) =>
  state.directionSlice.currentCategoryTo;

export const getCategoryIds = (state: RootState) =>
  state.directionSlice.categoryIds;
export const getCategories = (state: RootState) =>
  state.directionSlice.categories;

export const filteredCategoriesFromSelector =
  (filter: string) => (state: RootState) => {
    const directions = state.categorySlice.directions;

    if (filter.length === 0) {
      return directions;
    }

    return directions.filter((el) => filter.includes(el.code));
  };

export const filteredCategoriesToSelector =
  (categoryFrom: string, filter: string) => (state: RootState) => {
    const directionsFilter = state.categorySlice.filters.find(
      (el) => el.from.code === categoryFrom
    )?.to;

    if (filter.length === 0) {
      return directionsFilter;
    }

    return directionsFilter?.filter((el) => filter.includes(el.code));
  };
