import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { ActionsPanel } from './components/ActionsPanel';
import { Calendar } from './components/Calendar';
import { store } from './app/store';
import { EventFormContextProvider } from './context/eventFormContext';
import { SelectedDateContextProvider } from './context/selectedDateContext';

import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <SelectedDateContextProvider>
          <EventFormContextProvider>
            <div className="app">
              <div className="app__background"></div>

              <ActionsPanel />
              
              <Calendar />
            </div>
          </EventFormContextProvider>
        </SelectedDateContextProvider>
      </Provider>
    </Router>
  );
};

export default App;
