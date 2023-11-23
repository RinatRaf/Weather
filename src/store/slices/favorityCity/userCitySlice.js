import { createSlice } from "@reduxjs/toolkit";

const userCitySlice = createSlice({
  name: "userCity",
  initialState: {
    cities: [],
  },
  reducers: {
    addSity: (state, action) => {
      const addedCity = state.cities.find(
        (item) =>
          item.lat === action.payload.lat && item.lon === action.payload.lon,
      );
      if (addedCity != null) {
        return;
      }
      state.cities.push(action.payload);
    },
    removeSity: (state, action) => {
      const { lat, lon } = action.payload;
      state.cities = state.cities.filter((city) => {
        return !(city.lat == lat && city.lon == lon);
      });
    },
  },
});

export const { addSity, removeSity } = userCitySlice.actions;
export default userCitySlice.reducer;
