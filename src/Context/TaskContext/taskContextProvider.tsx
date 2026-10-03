import { useEffect, useReducer } from 'react';
import { TaskContext } from './taskContext';
import { initialTaskState } from './initialTaskState';
import { taskReducer } from './taskReducer';
import { timerWorkerManager } from '../../workers/timerWorkerManager';
import { taskActionTypes } from './taskActions';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const activeTask = state.activeTask;

  useEffect(() => {
    if (!activeTask) return;

    const worker = timerWorkerManager.getInstance();

    worker.onmessage(e => {
      const countDownSeconds = e.data;
      console.log('Worker enviou:', countDownSeconds);

      if (countDownSeconds <= 0) {
        dispatch({ type: taskActionTypes.COMPLETE_TASK });
      } else {
        dispatch({
          type: taskActionTypes.COUNT_DOWN,
          payload: { secondsRemaining: countDownSeconds },
        });
      }
    });

    worker.postMessage({
      activeTask,
      secondsRemaining: activeTask.duration * 60,
      tasks: [],
      formattedSecondsRemaining: '',
      currentCycle: 0,
      config: {
        workTime: 0,
        shortBreakTime: 0,
        longBreakTime: 0,
      },
    });

    return () => worker.terminate();
  }, [activeTask, dispatch]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
