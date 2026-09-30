import type { taskModel } from '../../Models/taskModel';

export const taskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
} as const;

export type TaskActionsWithPayload = {
  type: typeof taskActionTypes.START_TASK;
  payload: taskModel;
};

export type TaskActionsWithoutPayload =
  | {
      type: typeof taskActionTypes.RESET_STATE;
    }
  | {
      type: typeof taskActionTypes.INTERRUPT_TASK;
    };

export type taskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
