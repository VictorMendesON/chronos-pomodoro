import type { taskStateModel } from '../../Models/taskStateModel';
import { formattedSecondsTooMinutes } from '../../utils/formatSecondsTooMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { taskActionTypes, type taskActionModel } from './taskActions';

export function taskReducer(
  state: taskStateModel,
  action: taskActionModel,
): taskStateModel {
  switch (action.type) {
    case taskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formattedSecondsTooMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case taskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case taskActionTypes.RESET_STATE: {
      return state;
    }
  }

  // Sempre deve retornar o estado
  return state;
}
