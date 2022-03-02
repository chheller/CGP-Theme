import {
  Circle,
  RadioButtonCheckedSharp,
  RadioButtonUncheckedSharp,
} from "@mui/icons-material";
import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { match } from "ts-pattern";
import { DailyTrackerData } from "../../../model/DailyTracker";

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
        {data.map((trackerDate) => (
          <IconButton key={trackerDate.id} color="inherit">
            {match(trackerDate.status)
              .with("complete", () => <Circle />)
              .with("partially_complete", () => <RadioButtonCheckedSharp />)
              .otherwise(() => (
                <RadioButtonUncheckedSharp />
              ))}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}
