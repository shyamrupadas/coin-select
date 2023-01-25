import { IDirection } from './directionSlice';
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
  let ids = [];

  if (state.directionSlice.currentCategoryFrom === 'all') {
    ids = state.directionSlice.directionIds;
  } else {
    ids =
      state.directionSlice.categories[state.directionSlice.currentCategoryFrom]
        .directions;
  }

  return ids.map((id) => ({
    code: id,
    name: state.directionSlice.directions[id].name,
  }));
};

export const getDirectionsTo = (state: RootState) => {
  const directions =
    state.directionSlice.directions[state.directionSlice.currentDirectionFrom]
      ?.to;

  const filteredDirections: IDirection[] = [];
  const possibleDirections = state.directionSlice.directionIds;
  const currentCategory = state.directionSlice.currentCategoryTo;
  const currentCategoryDirections =
    state.directionSlice.categories[currentCategory]?.directions;

  if (currentCategory === 'all') {
    directions?.forEach((el) => {
      if (possibleDirections.includes(el.code)) {
        filteredDirections.push(el);
      }
    });
  } else {
    directions?.forEach((el) => {
      if (currentCategoryDirections.includes(el.code)) {
        filteredDirections.push(el);
      }
    });
  }

  return filteredDirections;
};

export const getDirections = (ids: string[]) => (state: RootState) => {
  return ids.map((id) => state.directionSlice.directions[id].name);
};
