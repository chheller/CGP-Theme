import { Container, SxProps, Theme, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DateTime } from "luxon";
import CreateNewTracker from "./components/CreateNewTracker";
import DailyTracker from "./components/DailyTracker";
import { useGetTrackersQuery } from "./state/daily-tracker.api";

interface DailyTrackerPageProps {}

export default function DailyTrackerPage({}: DailyTrackerPageProps) {
  const { isSuccess, data, isError, error, isFetching } = useGetTrackersQuery(
    {}
  );

  return (
    <Container maxWidth="md" sx={{ my: 2 }}>
      <Box sx={{ display: "flex", border: 1, borderRadius: 1, padding: 1 }}>
        <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
          <Typography>Task</Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1.5,
            flexBasis: 0,
            justifyContent: "space-around",
            display: "flex",
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6].map((days) => (
            <Typography>
              {DateTime.local().minus({ days }).toFormat("LLL dd")}
            </Typography>
          ))}
        </Box>
      </Box>
      {isSuccess &&
        data != null &&
        Object.entries(data).map(([key, val]) => (
          <DailyTracker key={key} trackerName={key} data={val} />
        ))}
      <CreateNewTracker></CreateNewTracker>
    </Container>
  );
}
