import React from 'react';
import './App.scss';
import { ActionsPanel } from './components/ActionsPanel';
import { Calendar } from './components/Calendar';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App__background"></div>

      <ActionsPanel />
      
      <Calendar />
    </div>
  );
};

export default App;
