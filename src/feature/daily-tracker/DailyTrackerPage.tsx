import CreateNewTracker from "./components/CreateNewTracker";
import DailyTracker from "./components/DailyTracker";
import "./DailyTrackerPage.css";
import { useGetTrackersQuery } from "./state/daily-tracker.api";

interface DailyTrackerPageProps {}

export default function DailyTrackerPage({}: DailyTrackerPageProps) {
  const { isSuccess, data, isError, error, isFetching } = useGetTrackersQuery(
    {}
  );

  return (
    <div className="container">
      {isSuccess &&
        data != null &&
        data.map((tracker) => <DailyTracker data={tracker} />)}
      <CreateNewTracker></CreateNewTracker>
    </div>
  );
}
