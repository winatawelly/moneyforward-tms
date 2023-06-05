export interface ITask {
  id: number;
  title: string;
  hours: number;
}

export type TaskContextType = {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  deleteTask: (id: number) => void;
};
