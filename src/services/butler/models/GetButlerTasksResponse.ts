export interface GetButlerTasksResponse {
  ButlerTasks?: ButlerTasks;
}
interface ButlerTasks {
  ButlerTask?: {
    name?: string;
    interval?: number;
    scheduleRandomized?: boolean;
    enabled?: boolean;
    title?: string;
    description?: string;
  }[];
}
