import * as actionTypes from "./reminderActionTypes";


// Reminder Action Creators
const createReminderAction = reminder => {
  console.log(reminder)
  return {
    type: actionTypes.CREATE_REMINDER,
    reminder: reminder
  };
};

const updateReminderAction = reminder => {
  return {
    type: actionTypes.UPDATE_REMINDER,
    reminder: reminder
  };
};

const deleteReminderAction = (date, id) => {
  return {
    type: actionTypes.DELETE_REMINDER,
    date: date,
    id: id
  };
};

// Actions
export const createReminder = payload => {
  return dispatch => {
    dispatch(createReminderAction(payload));
  };
};

export const updateReminder = payload => {
  return dispatch => {
    dispatch(updateReminderAction(payload));
  };
};

export const deleteReminder = (date, id) => {
  return dispatch => {
    dispatch(deleteReminderAction(date, id));
  };
};
