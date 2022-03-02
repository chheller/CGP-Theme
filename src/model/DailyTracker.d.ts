export interface DailyTrackerData {
  id: string;
  name: string;
  status: DailyTrackerStatus;
  date: string;
}

export type DailyTrackerStatus =
  | "incomplete"
  | "complete"
  | "partially_complete";
