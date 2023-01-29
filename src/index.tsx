import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { store } from './app/store';
import './index.scss';
import App from './App';
import { EventFormContextProvider } from './context/eventFormContext';
import { SelectedDateContextProvider } from './context/selectedDateContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <SelectedDateContextProvider>
          <EventFormContextProvider>
            <App />
          </EventFormContextProvider>
        </SelectedDateContextProvider>
      </Provider>
    </React.StrictMode>
  </Router>
);
