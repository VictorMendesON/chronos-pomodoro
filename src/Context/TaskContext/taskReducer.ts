import type { taskStateModel } from '../../Models/taskStateModel';
import { taskActionTypes, type taskActionModel } from './taskActions';

export function taskReducer(
  state: taskStateModel,
  action: taskActionModel,
): taskStateModel {
  switch (action.type) {
    case taskActionTypes.START_TASK: {
      return state;
    }
    case taskActionTypes.INTERRUPT_TASK: {
      return state;
    }
    case taskActionTypes.RESET_STATE: {
      return state;
    }
  }

  // Sempre deve retornar o estado
  return state;
}
