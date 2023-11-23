import { useState } from "react";
import { GlobalSvgSelector } from "../../../Assets/icons/global/GlobalSvgSelector";
import styles from "./Header.module.scss";
import { useGetLocationByNameQuery } from "../../../services/city-search";
import CitySearchItem from "./CitySearchItem";
import { useSelector } from "react-redux";
import { useWeather } from "../../../hooks/useWeather";

const Header = () => {
  const [cityName, setCityName] = useState("");
  const { data } = useGetLocationByNameQuery(cityName, { skip: !cityName });
  const getWeather = useWeather();
  const onSubmit = (e) => {
    e.preventDefault();
    setCityName(e.target.elements.citySearch.value);
    e.target.elements.citySearch.value = "";
  };

  const cities = useSelector((state) => state.userCities.cities);

  const onChange = (e) => {
    const [lat, lon] = e.target.value.split("-");
    getWeather({ lat, lon });
  };

  console.log(data);
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={styles.title}>Weather</div>
      </div>
      <form className={styles.searchForm} onSubmit={onSubmit}>
        <input className={styles.searchInput} id="citySearch" type="text" />
        <button className={styles.searchButton} type="submit">
          Поиск
        </button>
        {cityName && (
          <div className={styles.box}>
            <ol>
              {data
                ? data.map((item) => (
                    <CitySearchItem
                      key={`${item.lat}${item.lon}`}
                      item={item}
                      setCityName={setCityName}
                    />
                  ))
                : ""}
            </ol>
          </div>
        )}
      </form>
      <div className={styles.wrapper}>
        <select
          defaultValue="city"
          className={styles.citySelect}
          onChange={onChange}
        >
          <option disabled value="city">
            Выбрать город
          </option>
          {cities
            ? cities.map((item) => (
                <option
                  key={`${item.lat}${item.lon}`}
                  value={`${item.lat}-${item.lon}`}
                >
                  {item.name}
                </option>
              ))
            : ""}
        </select>
      </div>
    </div>
  );
};

export default Header;
