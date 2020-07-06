import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../modules/store/reminders";
import ReminderForm from "./ReminderForm";
import Reminder from "./Reminder";
import _sortBy from "lodash/sortBy";
import * as styles from './styles'
const defaultColor = "#000";

class Day extends React.Component {
  state = {
    editReminder: {
      id: null,
      time: null,
      description: null,
      color: defaultColor
    }
  };

  setColor = data => {
    this.setState({
      editReminder: {
        ...this.state.editReminder,
        color: data.color
      }
    });
  };

  setEdit = reminder => {
    this.props.setEditDay(this.props.day);

    this.setState({
      editReminder: {
        ...this.state.editReminder,
        ...reminder
      }
    });
  };

  handleCreateUpdateReminder = (e, update) => {
    e.persist();
    e.preventDefault();
  
    console.log(e);
    const form = e.target;
    const description = form.querySelector(".reminder-description").value.trim();

    if (description.length) {
      const payload = {
        date: this.props.date,
        time: form.querySelector(".rc-time-picker-input").value,
        description: description,
        color: this.state.editReminder.color || defaultColor
      };

      if (update.id) {
        payload["id"] = update.id;
        this.props.updateReminder(payload);
      } else {
        this.props.createReminder(payload);
      }

      this.props.setEditDay(null);
      this.setState({ editReminder: {} });
    }
  };

  handleDeleteReminder = id => {
    this.props.deleteReminder(this.props.date, id);
  };

  render() {
    const reminders =
      _sortBy(this.props.reminders.reminder[this.props.date], "time") || [];

      console.log(reminders);

    const cssClasses = this.props.firstDayIndex
      ? `first-index-${this.props.firstDayIndex}`
      : "";

    return (
      <styles.Day className={cssClasses}>
        {!this.props.editDay && (
          <styles.NewReminderBtn
            onClick={() => this.props.setEditDay(this.props.day)}
          >
            <i className="fa fa-plus-circle" />
          </styles.NewReminderBtn>
        )}

        {this.props.editDay === this.props.day ? (
          <ReminderForm
            reminder={this.state.editReminder}
            setColor={this.setColor}
            setEditDay={this.props.setEditDay}
            handleCreateUpdateReminder={this.handleCreateUpdateReminder}
            defaultColor={defaultColor}
          />
        ) : (
          <React.Fragment>
            <header>{this.props.day}</header>

            {reminders.length
              ? reminders.map((reminder, i) => {
                  return (
                    <Reminder
                      key={i}
                      reminder={reminder}
                      setEdit={this.setEdit}
                      handleDeleteReminder={this.handleDeleteReminder}
                    />
                  );
                })
              : null}
          </React.Fragment>
        )}
      </styles.Day>
    );
  }
}

const mapStateToProps = state => {
  return {
    reminders: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReminder: payload => dispatch(actions.createReminder(payload)),
    updateReminder: payload => dispatch(actions.updateReminder(payload)),
    deleteReminder: (date, id) => dispatch(actions.deleteReminder(date, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day);