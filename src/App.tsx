import React from 'react';
import './App.scss';
import { ActionsPanel } from './components/ActionsPanel';
import { Calendar } from './components/Calendar';

function App() {
  return (
    <div className="App">
      <div className="App__background"></div>

      <ActionsPanel />
      
      <Calendar />
    </div>
  );
}

export default App;
