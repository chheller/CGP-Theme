import { AddCircle } from "@mui/icons-material";
import { Button, Icon, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function CreateNewTracker() {
  return (
    <Box
      sx={{
        display: "flex",
        border: 1,
        borderRadius: 1,
        py: 1,
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Button color="inherit">
        <Typography variant="button">
          Add a new Daily Task Tracker...
        </Typography>
        <Icon sx={{ mx: 1 }}>
          <AddCircle></AddCircle>
        </Icon>
      </Button>
    </Box>
  );
}
