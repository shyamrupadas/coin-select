/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface IDirection {
  code: string;
  name: string;
}

export interface IDirections {
  [key: string]: {
    name: string;
    to: IDirection[];
  };
}

export type ICategoryId = 'all' | 'crypto' | 'bank' | 'cash';

export interface ICategory {
  label: ICategoryId;
  directions: string[];
}

export interface ICategories {
  [key: string]: ICategory;
}

interface DirectionsFromState {
  directionIds: string[];
  directions: IDirections;
  currentCategoryFrom: ICategoryId;
  currentDirectionFrom: string;
  categoryIds: ICategoryId[];
  categories: ICategories;
  currentCategoryTo: ICategoryId;
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
    setCurrentDirectionFrom: (state, action) => {
      state.currentDirectionFrom = action.payload;
    },
  },
});

export const {
  setData,
  setCurrentCategoryFrom,
  setCurrentCategoryTo,
  setCurrentDirectionFrom,
} = directionSlice.actions;
export default directionSlice.reducer;
