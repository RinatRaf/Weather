/* eslint-disable react/prop-types */
import { useWeather } from "../../../hooks/useWeather";

const CitySearchItem = ({ item, setCityName }) => {
  const weather = useWeather();

  const onClick = (e) => {
    const [lat, lon] = e.target.closest("li").id.split("-");
    weather({ lat, lon });
    setCityName("");
  };

  return (
    <li
      onClickCapture={onClick}
      id={`${item.lat}-${item.lon}`}
      key={`${item.lat}${item.lon}`}
    >
      <span>
        {item?.local_names?.ru ?? item?.name ?? "-"} ({item?.state ?? "-"})
      </span>
    </li>
  );
};

export default CitySearchItem;
