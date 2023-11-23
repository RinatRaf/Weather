import { useDispatch } from "react-redux";
import { getCurrentWeather } from "../store/slices/weather/currentWeatherSlice";
import { getHourlyWeather } from "../store/slices/weather/hourlyWeatherSlice";

export const useWeather = () => {
  const dispatch = useDispatch();
  return (city) => {
    dispatch(getCurrentWeather(city));
    dispatch(getHourlyWeather(city));
  };
};
