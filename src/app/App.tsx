import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DailyTrackerPage from "../feature/daily-tracker/DailyTrackerPage";
import store from "../store";
import AppFooter from "./Footer";
import AppHeader from "./Header";

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
