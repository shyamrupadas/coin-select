import { createSlice } from '@reduxjs/toolkit';

// interface Direction {
//   code: string,
//   name: string
// }

// interface Filter {
//   from: Direction,
//   to: Direction[]
// }

interface DirectionsFromState {
  directionIds: string[],
  directions: any,
  currentCategory: string,
  currentDirection: string,
  categoryIds: string[],
  categories: any,
}

const initialState: DirectionsFromState = {
  directionIds: [],
  directions: {},
  currentCategory: 'all',
  currentDirection: 'BTC',
  categoryIds: [],
  categories: {},
};

export const directionSlice = createSlice({
  name: 'directions',
  initialState,
  reducers: {
    setData: (state, action) => {
      const { directions, filters, categories } = action.payload
      if (state.directionIds.length > 0) return

      directions.forEach((el: any) => {
        state.directionIds.push(el.code)
        state.directions[el.code] = { name: el.name }
      })

      filters.forEach((el: any) => {
        state.directions[el.from.code] = { to: el.to }
      })

      Object.entries(categories).forEach((el: any) => {
        state.categoryIds.push(el[0])
      })

      state.categories = categories
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload
    }
  },
});

export const { setData, setCurrentCategory } = directionSlice.actions
export default directionSlice.reducer;
