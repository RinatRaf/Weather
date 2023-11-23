import styles from "./Days.module.scss";
import DayCard from "./DayCard";
import { useSelector } from "react-redux";

const Days = () => {
  const hourlyWeather = useSelector(
    (state) => state.hourlyWeather.hourlyWeather,
  );
  const days = [];
  hourlyWeather?.list?.forEach((element) => {
    const date = new Date(element.dt * 1000);
    const data = {
      time: date.getHours() + ":00",
      day_info: `${date.getDate()}.${date.getMonth() + 1}`,
      icon_id: "small_rain_sun",
      temp_day: Math.round(element.main.temp),
      temp_night: Math.round(element.main.feels_like),
      info: element.weather[0].main,
    };
    days.push(data);
  });
  // const days1 = [
  //     {
  //       time: 'Сегодня',
  //       day_info: '28 авг',
  //       icon_id: 'sun',
  //       temp_day: '+18',
  //       temp_night: '+15',
  //       info: 'Облачно',
  //     },
  //     {
  //       time: 'Завтра',
  //       day_info: '29 авг',
  //       icon_id: 'small_rain_sun',
  //       temp_day: '+18',
  //       temp_night: '+15',
  //       info: 'Облачно с прояснениями',
  //     },
  //     {
  //       time: 'Ср',
  //       day_info: '30 авг',
  //       icon_id: 'small_rain',
  //       temp_day: '+18',
  //       temp_night: '+15',
  //       info: 'небольшой дождь',
  //     },
  //     {
  //       time: 'Чт',
  //       day_info: '28 авг',
  //       icon_id: 'mainly_cloudy',
  //       temp_day: '+18',
  //       temp_night: '+15',
  //       info: 'Облачно',
  //     },
  //     {
  //       time: 'Пт',
  //       day_info: '28 авг',
  //       icon_id: 'rain',
  //       temp_day: '+18',
  //       temp_night: '+15',
  //       info: 'Облачно',
  //     },
  //     {
  //       time: 'Сб',
  //       day_info: '28 авг',
  //       icon_id: 'sun',
  //       temp_day: '+18',
  //       temp_night: '+15',
  //       info: 'Облачно',
  //     },
  //     {
  //       time: 'Вс',
  //       day_info: '28 авг',
  //       icon_id: 'sun',
  //       temp_day: '+18',
  //       temp_night: '+15',
  //       info: 'Облачно',
  //     },
  //   ];
  return (
    <div className={styles.days}>
      {days.map((day) => (
        <DayCard key={day.time} day={day} />
      ))}
    </div>
  );
};

export default Days;
