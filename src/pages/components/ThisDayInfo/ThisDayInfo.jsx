import styles from "./ThisDayInfo.module.scss";
import ThisDayInfoItem from "./ThisDayInfoItem";
import cloud from "../../../Assets/images/cloud.png";
import { useSelector } from "react-redux";

const ThisDayInfo = () => {
  const weather = useSelector((state) => state.currentWeather.currentWeather);
  const parameters = [
    {
      icon_id: "temp",
      name: "Температура",
      description: `${Math.round(weather?.main.temp)}° - ощущается как ${
        weather?.main.feels_like
      }°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      description: `${weather?.main.pressure} мм ртутного столба`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      description: `Без осадков`,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      description: `${Math.round(
        weather?.wind.speed,
      )} м/с юго-запад - легкий ветер`,
    },
  ];

  return (
    <div className={styles.this__day_info}>
      <div className={styles.this__day_info__items}>
        {parameters.map((item) => (
          <ThisDayInfoItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={styles.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};

export default ThisDayInfo;
