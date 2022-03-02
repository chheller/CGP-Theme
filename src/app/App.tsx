import React from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "../store";
import { Provider } from "react-redux";
import AppHeader from "./Header";
import AppFooter from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DailyTrackerPage from "../feature/daily-tracker/DailyTrackerPage";

function App() {
  return (
    <Provider store={store}>
      <AppHeader></AppHeader>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DailyTrackerPage />} />
        </Routes>
      </BrowserRouter>
      <AppFooter></AppFooter>
    </Provider>
  );
}

export default App;
