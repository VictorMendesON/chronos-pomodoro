import type { taskModel } from '../../Models/taskModel';
import type { taskStateModel } from '../../Models/taskStateModel';

export const taskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
  COUNT_DOWN: 'COUNT_DOWN',
  COMPLETE_TASK: 'COMPLETE_TASK',
  CHANGE_SETTINGS: 'CHANGE_SETTINGS',
} as const;

export type TaskActionsWithPayload =
  | {
      type: typeof taskActionTypes.START_TASK;
      payload: taskModel;
    }
  | {
      type: typeof taskActionTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: typeof taskActionTypes.CHANGE_SETTINGS;
      payload: taskStateModel['config'];
    };

export type TaskActionsWithoutPayload =
  | {
      type: typeof taskActionTypes.RESET_STATE;
    }
  | {
      type: typeof taskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: typeof taskActionTypes.COMPLETE_TASK;
    };

export type taskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
