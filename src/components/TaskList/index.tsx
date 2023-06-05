import React from "react";
import { TaskContext } from "../../context/taskContext";
import { TaskContextType, ITask } from "../../@types/task";

import Modal from "../DeleteModal";

import "./style.css";

const TaskList = () => {
  const { tasks, deleteTask } = React.useContext(
    TaskContext
  ) as TaskContextType;

  const [selected, setSelected] = React.useState<ITask | null>();

  const handleDelete = (id: number) => {
    deleteTask(id);
    setSelected(null);
  };

  return (
    <div>
      <h4>Todo list</h4>

      <table className="taskList">
        <tbody>
          <tr>
            <th className="large-header">Task Title</th>
            <th>Time Required (in Hrs)</th>
            <th>Action</th>
          </tr>
          {tasks.map((task) => (
            <tr className="taskData">
              <td>{task.title}</td>
              <td>{task.hours}</td>
              <td>
                <p
                  className="taskData-delete"
                  onClick={() => setSelected(task)}
                >
                  Delete
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selected && (
        <Modal
          modalOpen={!!selected}
          title={selected.title}
          onConfirm={() => handleDelete(selected.id)}
          onCancel={() => setSelected(null)}
        />
      )}
    </div>
  );
};

export default TaskList;
