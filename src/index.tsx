import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './app/store';
import './index.scss';
import App from './App';
import { EventFormContextProvider } from './context/eventFormContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <EventFormContextProvider>
        <App />
      </EventFormContextProvider>
    </Provider>
  </React.StrictMode>
);
