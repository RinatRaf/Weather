import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../../../constants/config";

const initialState = {};

export const getHourlyWeather = createAsyncThunk(
  "hourlyWeather/getHourlyWeather",
  async (city, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric&cnt=7`,
      );
      dispatch(setHourlyWeather(response.data));
    } catch (e) {
      return rejectWithValue("Не удалось загрузить погоду");
    }
  },
);

const hourlyWeatherSlice = createSlice({
  name: "hourlyWeather",
  initialState,
  reducers: {
    setHourlyWeather: (state, action) => {
      state.hourlyWeather = action.payload;
    },
  },
  extraReducers: {
    //     [getHourlyWeather.fulfilled]: () => console.log('ok'),
    //     [getHourlyWeather.pending]: () => console.log('wait'),
    //     [getHourlyWeather.rejected]: (e) => console.log(e),
  },
});

export const { setHourlyWeather } = hourlyWeatherSlice.actions;
export default hourlyWeatherSlice.reducer;
