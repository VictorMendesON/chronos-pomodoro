import { createContext } from 'react';
import type { taskStateModel } from '../../Models/taskStateModel';
import { initialTaskState } from './initialTaskState';
import type { taskActionModel } from './taskActions';

type TaskContextProps = {
  state: taskStateModel;
  dispatch: React.Dispatch<taskActionModel>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
