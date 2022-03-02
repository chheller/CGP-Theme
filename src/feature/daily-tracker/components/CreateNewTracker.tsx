import { AddCircle } from "@mui/icons-material";
import { Button, Icon, IconButton, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useUpdateTrackerMutation } from "../state/daily-tracker.api";

export default function CreateNewTracker() {
  const [newTaskName, setNewTaskName] = useState<string>("");

  const [trigger, query] = useUpdateTrackerMutation();
  function addNewTask() {
    trigger({ name: newTaskName });
  }
  return (
    <Box
      sx={{
        display: "flex",
        border: 1,
        borderRadius: 1,
        alignItems: "center",
      }}
    >
      <Box sx={{ flexGrow: 1, flexBasis: 0, p: 1 }}>
        <Input
          placeholder="New Event name..."
          value={newTaskName}
          onChange={({ currentTarget: { value } }) => setNewTaskName(value)}
        ></Input>
      </Box>
      <Box
        sx={{
          flexGrow: 1.5,
          flexBasis: 0,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          color="inherit"
          disabled={newTaskName === ""}
          onClick={() => addNewTask()}
        >
          <Typography variant="button">
            Add a new Daily Task Tracker...
          </Typography>
          <Icon sx={{ mx: 1 }}>
            <AddCircle></AddCircle>
          </Icon>
        </Button>
      </Box>
    </Box>
  );
}
