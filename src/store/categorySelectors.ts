import { RootState } from './index';

export const filteredCategoriesFromSelector = (filter: string) => (state: RootState) => {
  const directions = state.categorySlice.directions

  if(filter.length === 0) {
    return directions
  }

  return directions.filter(el => filter.includes(el.code))
}

export const filteredCategoriesToSelector = (categoryFrom: string, filter: string) => (state: RootState) => {
  const directionsFilter = state.categorySlice.filters.find(el => el.from.code === categoryFrom)?.to

  if(filter.length === 0) {
    return directionsFilter
  }

  return directionsFilter?.filter(el => filter.includes(el.code))
}
