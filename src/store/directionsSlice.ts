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
  ids: string[],
  entities: any,
}

const initialState: DirectionsFromState = {
  ids: [],
  entities: {},
};

export const directionsSlice = createSlice({
  name: 'directions',
  initialState,
  reducers: {
    setDirections: (state, action) => {
      const { directions, filters } = action.payload
      if (state.ids.length > 0) return

      directions.forEach((el: any) => {
        state.ids.push(el.code)
        state.entities[el.code] = { name: el.name }
      })

      filters.forEach((el: any) => {
        state.entities[el.from.code] = { to: el.to }
      })
    },
  },
});

export const { setDirections } = directionsSlice.actions
export default directionsSlice.reducer;
