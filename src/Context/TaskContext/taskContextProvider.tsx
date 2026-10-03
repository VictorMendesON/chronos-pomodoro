import { useEffect, useReducer } from 'react';
import { TaskContext } from './taskContext';
import { initialTaskState } from './initialTaskState';
import { taskReducer } from './taskReducer';
import { timerWorkerManager } from '../../workers/timerWorkerManager';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = timerWorkerManager.getInstance();

  worker.onmessage(e => {
    console.log(e.data);
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log('Worker terminado por falta de activeTask');
      worker.terminate();
    }

    worker.postMessage(state);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
