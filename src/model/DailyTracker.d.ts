export interface DailyTrackerData {
  id: number;
  name: string;
  status: DailyTrackerStatus;
}

export type DailyTrackerStatus =
  | "incomplete"
  | "complete"
  | "partially_complete";
