import React from "react";
import * as styles from './styles'

const headerWeekDays = props => (
  <styles.WeekDaysHeader className="weekdays">
    {props.days.map((weekday, i) => (
      <strong key={i}>{weekday}</strong>
    ))}
  </styles.WeekDaysHeader>
);

export default headerWeekDays;