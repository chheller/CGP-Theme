import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import {
  green,
  grey,
  indigo,
  lightBlue,
  orange,
  red,
  yellow,
} from "@mui/material/colors";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./msw/browser");

  worker.start();
}

const theme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode: "light",
      primary: { main: grey[900] },
      secondary: { main: indigo[500] },
      error: {
        light: red[400],
        main: red[500],
        dark: red[300],
        contrastText: grey[800],
      },
      success: {
        main: green[500],
      },
      warning: {
        main: yellow[500],
        contrastText: grey[200],
      },
      info: {
        main: lightBlue[500],
      },
      text: {
        primary: grey[200],
        secondary: grey[700],
        disabled: grey[500],
      },
      background: {
        default: grey[800],
        paper: grey[200],
      },
      common: {
        black: grey[900],
        white: grey[200],
      },
      tonalOffset: 0.2,
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <App />
      </React.Fragment>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
