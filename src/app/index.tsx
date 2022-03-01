import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from '../store';
import { Provider } from 'react-redux';
import AppHeader from './header';
import AppFooter from './footer';
import { BrowserRouter, Route } from 'react-router-dom';
import DailyTrackerScreen from '../feature/daily-tracker/DailyTrackerScreen';

function App() {
  return (
    <Provider store={store}>
      <AppHeader></AppHeader>
      <BrowserRouter>
        <Route path="/" element={DailyTrackerScreen}/>
      </BrowserRouter>
      <AppFooter></AppFooter>
    </Provider>
  );
}

export default App;
