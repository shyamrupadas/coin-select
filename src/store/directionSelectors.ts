import { ICategory, IDirection } from './directionSlice';
import { RootState } from './index';

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

export const getDirectionsFrom = (state: RootState) => {
  if (state.directionSlice.currentCategoryFrom === 'all') {
    return state.directionSlice.directionIds;
  }

  return state.directionSlice.categories[
    state.directionSlice.currentCategoryFrom
  ].directions;
};

export const getFilteredOptionsFrom = (state: RootState) => {
  const { directions } = state.categorySlice;

  if (state.directionSlice.currentCategoryFrom === 'all') {
    return directions;
  }

  return directions.filter((el) => true);
};

export const filteredCategoriesFromSelector =
  (filter: string) => (state: RootState) => {
    const { directions } = state.categorySlice;

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
