import { useEffect } from "react";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import styles from "./Home.module.scss";
import Days from "./components/Days/Days";
import { useWeather } from "../hooks/useWeather";

const Home = () => {
  const weather = useWeather();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const city = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      weather(city);
    });
  }, []);

  return (
    <div>
      <div className={styles.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};

export default Home;
