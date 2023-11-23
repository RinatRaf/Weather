import styles from "./Days.module.scss";
import { GlobalSvgSelector } from "../../../Assets/icons/global/GlobalSvgSelector";

const DayCard = ({
  // eslint-disable-next-line react/prop-types
  day: { time, day_info, icon_id, temp_day, temp_night, info },
}) => {
  return (
    <div className={styles.day_card}>
      <div className={styles.day_title}>{time}</div>
      <div className={styles.day_info}>{day_info}</div>
      <div className={styles.icon_id}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={styles.temp_day}>{temp_day}</div>
      <div className={styles.temp_night}>{temp_night}</div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};

export default DayCard;
