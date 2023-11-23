import { configureStore } from "@reduxjs/toolkit";
import userCitySlice from "./slices/favorityCity/userCitySlice";
import currentWeatherSlice from "./slices/weather/currentWeatherSlice";
import { cityApi } from "../services/city-search";
import hourlyWeatherSlice from "./slices/weather/hourlyWeatherSlice";

export const store = configureStore({
  reducer: {
    userCities: userCitySlice,
    currentWeather: currentWeatherSlice,
    cityApi: cityApi.reducer,
    hourlyWeather: hourlyWeatherSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cityApi.middleware),
});
