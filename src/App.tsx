import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRutas from './routes/AppRutas';
import { AppProvider } from './context';

function App() {
  return (
    <Router>
      <AppProvider>
        <AppRutas></AppRutas>
      </AppProvider>
    </Router>
  );
}

export default App;
