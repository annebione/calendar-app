import React from "react";

import * as styles from './styles'

export default class Calendar extends React.Component {
  render() {
    return <styles.CalendarLayout>{this.props.children}</styles.CalendarLayout>;
  }
}