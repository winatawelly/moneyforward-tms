import React from "react";
import { FormEvent } from "react";

import { TaskContext } from "../../context/taskContext";
import { TaskContextType } from "../../@types/task";

import "./style.css";

const NewTaskForm = () => {
  const { addTask } = React.useContext(TaskContext) as TaskContextType;

  const [title, setTitle] = React.useState("");
  const [hours, setHours] = React.useState(0);

  const handleTitleChange = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleHoursChange = (e: FormEvent<HTMLInputElement>) => {
    setHours(e.currentTarget.valueAsNumber);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTask({
      id: Date.now(),
      title: title,
      hours: hours,
    });

    setTitle("");
    setHours(0);
  };

  return (
    <form className="new-task-form" onSubmit={onSubmit}>
      <div className="form-input">
        <label>Task title</label>
        <input
          value={title}
          onChange={handleTitleChange}
          maxLength={128}
          required
        />
      </div>

      <div className="form-input">
        <label>Time required (in Hrs)</label>
        <input
          value={hours}
          onChange={handleHoursChange}
          type="number"
          max={24}
          required
        />
      </div>

      <button type="submit" className="form-submit">
        Add
      </button>
    </form>
  );
};

export default NewTaskForm;
