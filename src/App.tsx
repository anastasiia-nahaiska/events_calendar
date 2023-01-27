import React from 'react';
import './App.scss';
import { Calendar } from './components/Calendar';
import { SetMonth } from './components/SetMonth';

function App() {
  return (
    <div className="App">
      <SetMonth />
      
      <Calendar />
    </div>
  );
}

export default App;
