import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../../../constants/config";

const initialState = {};

export const getCurrentWeather = createAsyncThunk(
  "currentWeather/getCurrentWeather",
  async (city, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`,
      );
      dispatch(setWeather(response.data));
    } catch (e) {
      return rejectWithValue("Не удалось загрузить погоду");
    }
  },
);

const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.currentWeather = action.payload;
    },
  },
  extraReducers: {
    // [getCurrentWeather.fulfilled]: () => console.log('ok'),
    // [getCurrentWeather.pending]: () => console.log('wait'),
    // [getCurrentWeather.rejected]: () => console.log('error'),
  },
});

export const { setWeather } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
