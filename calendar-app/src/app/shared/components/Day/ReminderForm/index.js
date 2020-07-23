import React from "react";
import TimePicker from "rc-time-picker";
import ColorPicker from "rc-color-picker";
import moment from "moment";
import "rc-time-picker/assets/index.css";
import "rc-color-picker/assets/index.css";
import { TextArea, SubmitBtn, CancelBtn } from './styles'

const reminderForm = props => {
  const time = props.reminder.time
    ? moment(props.reminder.time, "HH:mm a")
    : moment()
        .hour(0)
        .minute(0);

  return (
    <form
      method="post"
      onSubmit={e => props.handleCreateUpdateReminder(e, props.reminder)}
    >
      <TextArea
        className="reminder-description"
        placeholder="Reminder"
        maxLength="30"
        defaultValue={props.reminder.description}
      />

      <TimePicker
        showSecond={false}
        defaultValue={time}
        format="h:mm a"
        use12Hours
        inputReadOnly
      />

      <ColorPicker
        className="color-picker"
        animation="slide-up"
        color={props.reminder.color || props.defaultColor}
        onClose={props.setColor}
      />

      <SubmitBtn>Submit</SubmitBtn>

      <CancelBtn
        onClick={() => props.setEditDay(null)}
      >
        Cancel
      </CancelBtn>
    </form>
  );
};

export default reminderForm;