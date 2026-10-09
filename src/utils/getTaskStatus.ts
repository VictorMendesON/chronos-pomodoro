import type { taskModel } from '../Models/taskModel';

export function getTaskStatus(task: taskModel, activeTask: taskModel | null) {
  if (task.completeDate) return 'Concluída';
  if (task.interruptDate) return 'Interrompida';
  if (task.id === activeTask?.id) return 'Em progresso';
  return 'Abandonada';
}
