import styles from "./ThisDayInfo.module.scss";
import { IndicatorSvgSelector } from "../../../Assets/icons/indicators/IndicatorSvgSelector";

// eslint-disable-next-line react/prop-types
const ThisDayInfoItem = ({ item: { icon_id, name, description } }) => {
  return (
    <div className={styles.this__day_info_item}>
      <div className={styles.icon_wrapper}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={styles.this__name}>{name}</div>
      <div className={styles.this__description}>{description}</div>
    </div>
  );
};

export default ThisDayInfoItem;
