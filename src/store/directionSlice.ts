/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface IDirection {
  code: string;
  name: string;
}

export interface IDirections {
  [key: string]: {
    name: string;
    to: IDirection[];
  };
}

export type ICategory = 'all' | 'crypto' | 'bank' | 'cash';

interface ICategories {
  [key: string]: {
    label: string;
    directions: string[];
  };
}

interface DirectionsFromState {
  directionIds: string[];
  directions: IDirections;
  currentCategoryFrom: string;
  currentDirectionFrom: string;
  categoryIds: string[];
  categories: ICategories;
  currentCategoryTo: string;
}

const initialState: DirectionsFromState = {
  directionIds: [],
  directions: {},
  currentCategoryFrom: 'all',
  currentDirectionFrom: 'BTC',
  categoryIds: [],
  categories: {},
  currentCategoryTo: 'all',
};

export const directionSlice = createSlice({
  name: 'directions',
  initialState,
  reducers: {
    setData: (state, action) => {
      const { directions, filters, categories } = action.payload;
      if (state.directionIds.length > 0) return;

      directions.forEach((el: IDirection) => {
        state.directionIds.push(el.code);
        state.directions[el.code] = { name: '', to: [] };
        state.directions[el.code].name = el.name;
      });

      filters.forEach((el: { from: IDirection; to: IDirection[] }) => {
        state.directions[el.from.code].to = el.to;
      });

      Object.entries(categories).forEach((el) => {
        state.categoryIds.push(el[0]);
      });

      state.categories = categories;
    },
    setCurrentCategoryFrom: (state, action) => {
      state.currentCategoryFrom = action.payload;
    },
    setCurrentCategoryTo: (state, action) => {
      state.currentCategoryTo = action.payload;
    },
  },
});

export const { setData, setCurrentCategoryFrom, setCurrentCategoryTo } =
  directionSlice.actions;
export default directionSlice.reducer;
