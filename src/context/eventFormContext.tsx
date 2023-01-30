import React, { ReactNode, useState } from 'react';
import { EventFormContextI } from '../types/EventFormContextI';

export const EventFormContext = React.createContext<EventFormContextI>({
  isOpenForm: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsOpenForm: () => {},
});

type Props = {
  children: ReactNode
};

export const EventFormContextProvider: React.FC<Props> = ({ children }) => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const contextValues = {
    isOpenForm,
    setIsOpenForm,
  };

  return (
    <EventFormContext.Provider value={contextValues}>
      { children }
    </EventFormContext.Provider>
  );
};