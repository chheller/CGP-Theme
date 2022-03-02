import { DailyTrackerData } from "../../../model/DailyTracker";

interface DailyTrackerProps {
  data: DailyTrackerData;
}

export default function DailyTracker({ data }: DailyTrackerProps) {
  return (
    <div>
      <p>{data.name}</p>
    </div>
  );
}
