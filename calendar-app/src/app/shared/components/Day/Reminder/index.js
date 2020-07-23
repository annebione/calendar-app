import React from "react";
import * as styles from './styles'

const Reminder = props => {

    console.log('hahahaha', props)
 return (
  <styles.Reminder style={{ background: props.reminder.color }}>
    <styles.Tools>
      <button onClick={() => props.handleDeleteReminder(props.reminder.id)}>
        <i className="fa fa-trash" />
      </button>
      <button onClick={() => props.setEdit(props.reminder)}>
        <i className="fa fa-edit" />
      </button>
    </styles.Tools>
    <strong>{props.reminder.description}</strong>
    <time>{props.reminder.time}</time>
  </styles.Reminder>
  )
};

export default Reminder;