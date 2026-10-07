import { useEffect, useReducer, useRef } from 'react';
import { TaskContext } from './taskContext';
import { initialTaskState } from './initialTaskState';
import { taskReducer } from './taskReducer';
import { timerWorkerManager } from '../../workers/timerWorkerManager';
import { taskActionTypes } from './taskActions';
import { loadBeep } from './../../utils/loadBeep';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);
  const activeTask = state.activeTask;

  useEffect(() => {
    if (!activeTask) return;

    const worker = timerWorkerManager.getInstance();

    worker.onmessage(e => {
      const countDownSeconds = e.data;

      if (countDownSeconds <= 0) {
        if (playBeepRef.current) {
          playBeepRef.current();
          playBeepRef.current = null;
        }
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

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
