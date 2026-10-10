import type { taskModel } from './taskModel';

export type taskStateModel = {
  tasks: taskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: taskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
