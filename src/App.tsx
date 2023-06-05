import React from "react";

import "./App.css";

import { TaskContext } from "./context/taskContext";
import { TaskContextType } from "./@types/task";

import DataDisplay from "./components/DataDisplay";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";

function App() {
  const { tasks } = React.useContext(TaskContext) as TaskContextType;

  const [totalTasks, setTotalTasks] = React.useState(0);
  const [totalDays, setTotalDays] = React.useState(0);
  const [totalHours, setTotalHours] = React.useState(0);

  React.useEffect(() => {
    if (tasks.length > 0) {
      let sumHours = 0;
      tasks.map((task) => (sumHours += task.hours));

      setTotalTasks(tasks.length);
      if (sumHours > 24) {
        setTotalDays(Math.floor(sumHours / 24));
        setTotalHours(sumHours % 24);
      } else {
        setTotalHours(sumHours);
        setTotalDays(0);
      }
    } else {
      setTotalTasks(0);
      setTotalHours(0);
      setTotalDays(0);
    }
  }, [tasks]);

  return (
    <div className="app">
      <h3>Task Management App</h3>

      <div className="summary-part">
        <DataDisplay title="Total Tasks" data={totalTasks} />
        <DataDisplay title="Total Days" data={totalDays} />
        <DataDisplay title="Total Hours" data={totalHours} />
      </div>

      <div className="form-part">
        <NewTaskForm />
      </div>

      <div className="table-part">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
