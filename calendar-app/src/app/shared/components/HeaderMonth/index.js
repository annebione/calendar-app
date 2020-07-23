import React from "react";
import { Link } from "react-router-dom";
import * as styles from './styles'

const headerMonth = props => (
  <styles.HeaderMonth className="month-header">
    <styles.Row>
      <Link to={"/" + props.prevMonth.slug}>
        <i className="fa fa-chevron-left" />
      </Link>
    </styles.Row>
    <styles.Row>
      <h1>{props.curMonth.name}</h1>
    </styles.Row>
    <styles.Row>
      <Link to={"/" + props.nextMonth.slug}>
        <i className="fa fa-chevron-right" />
      </Link>
    </styles.Row>
  </styles.HeaderMonth>
);

export default headerMonth;
