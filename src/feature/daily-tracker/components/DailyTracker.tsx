import {
  Circle,
  RadioButtonCheckedSharp,
  RadioButtonUncheckedSharp,
} from "@mui/icons-material";
import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { DateTime } from "luxon";
import { match } from "ts-pattern";
import {
  DailyTrackerData,
  DailyTrackerStatus,
} from "../../../model/DailyTracker";
import { initializeArray } from "../../../util/array";
import { useUpdateTrackerMutation } from "../state/daily-tracker.api";

interface DailyTrackerProps {
  trackerName: string;
  data: DailyTrackerData[];
}

export default function DailyTracker({ trackerName, data }: DailyTrackerProps) {
  return (
    <Box
      component="span"
      m={1}
      sx={{
        display: "flex",
        border: 1,
        borderRadius: 1,
        padding: 1,
        mx: "auto",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        alignItems: "center",
      }}
    >
      <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
        <Typography align="left" variant="body1">
          {trackerName}
        </Typography>
      </Box>
      <Box
        component="span"
        sx={{
          flexGrow: 1.5,
          flexBasis: 0,
          justifyContent: "space-around",
          display: "flex",
        }}
      >
        {initializeArray(7, (idx) => DateTime.utc().minus({ days: idx })).map(
          (date) => (
            <DailyTrackerIcon
              date={date.toISODate()}
              trackerName={trackerName}
              trackerData={data.find((tracker) =>
                date.hasSame(DateTime.fromISO(tracker.date), "day")
              )}
            />
          )
        )}
      </Box>
    </Box>
  );
}

function DailyTrackerIcon({
  date,
  trackerName,
  trackerData,
}: {
  date: string;
  trackerName: string;
  trackerData?: DailyTrackerData;
}) {
  const [trigger, query] = useUpdateTrackerMutation();

  function handleTrackerClick(tracker: Omit<DailyTrackerData, "id">) {
    const updatedStatus = match<DailyTrackerStatus, DailyTrackerStatus>(
      tracker.status
    )
      .with("complete", () => "incomplete")
      .with("partially_complete", () => "complete")
      .with("incomplete", () => "partially_complete")
      .run();

    trigger({ ...tracker, status: updatedStatus });
  }

  return (
    <IconButton
      key={date}
      color="inherit"
      disabled={query.isLoading && query.originalArgs?.date === date}
      onClick={() =>
        handleTrackerClick(
          trackerData ?? { date, name: trackerName, status: "incomplete" }
        )
      }
    >
      {match(trackerData?.status ?? "incomplete")
        .with("complete", () => <Circle />)
        .with("partially_complete", () => <RadioButtonCheckedSharp />)
        .otherwise(() => (
          <RadioButtonUncheckedSharp />
        ))}
    </IconButton>
  );
}
