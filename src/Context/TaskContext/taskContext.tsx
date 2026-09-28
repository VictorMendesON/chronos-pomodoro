import { createContext } from 'react';
import type { taskStateModel } from '../../Models/taskStateModel';
import { initialTaskState } from './initialTaskState';

type TaskContextProps = {
  state: taskStateModel;
  setState: React.Dispatch<React.SetStateAction<taskStateModel>>;
};

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
