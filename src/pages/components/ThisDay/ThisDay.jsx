import { useEffect, useMemo, useState } from "react";
import { GlobalSvgSelector } from "../../../Assets/icons/global/GlobalSvgSelector";
import classes from "./ThisDay.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addSity,
  removeSity,
} from "../../../store/slices/favorityCity/userCitySlice";

const ThisDay = () => {
  const weather = useSelector((state) => state.currentWeather.currentWeather);
  const userCities = useSelector((state) => state.userCities);
  const dispatch = useDispatch();
  const isFavorite = useMemo(() => {
    return userCities?.cities.find((item) => {
      return item.lat === weather.coord.lat && item.lon === weather.coord.lon;
    });
  }, [userCities, weather]);
  const temp =
    typeof weather?.main.temp == "number"
      ? Math.round(weather?.main.temp)
      : "-";
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const onClick = () => {
    const city = {
      lat: weather.coord.lat,
      lon: weather.coord.lon,
      name: weather.name,
    };
    isFavorite ? dispatch(removeSity(city)) : dispatch(addSity(city));
  };

  const hours = time.getHours() > 9 ? time.getHours() : "0" + time.getHours();
  const minutes =
    time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes();
  return (
    <div className={classes.this__day}>
      <div className={classes.top}>
        <div className={classes.top__wrapper}>
          <div className={classes.this__temp}>{temp}</div>
          <div className={classes.this__day_title}>Сегодня</div>
        </div>
        <GlobalSvgSelector id={weather?.weather[0].main} />
      </div>
      <div className={classes.bottom}>
        <div className={classes.this__time}>
          Время: <span>{`${hours}:${minutes}`}</span>
        </div>
        <div className={classes.this__city}>
          Город: <span>{weather?.name}</span>
          <div onClick={onClick}>
            <GlobalSvgSelector id={isFavorite ? "favorite-fill" : "favorite"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
