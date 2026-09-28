import type { taskModel } from '../Models/taskModel';

export function getNextCycleType(currentCycle: number): taskModel['type'] {
  if (currentCycle % 8 === 0) return 'longBreakTime';
  if (currentCycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}
