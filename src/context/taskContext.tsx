import React from "react";
import { ITask, TaskContextType } from "../@types/task";

export const TaskContext = React.createContext<TaskContextType | null>(null);

const TaskProvider = ({ children }: any) => {
  const [tasks, setTasks] = React.useState<ITask[] | []>(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  const addTask = (task: ITask) => {
    const newTask: ITask = {
      id: task.id,
      title: task.title,
      hours: task.hours,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
