import React, { ReactNode, useState } from 'react';
import { EventFormContextI } from '../types/EventFormContextI';

export const EventFormContext = React.createContext<EventFormContextI>({
  isOpenForm: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsOpenForm: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeForm: () => {},
});

type Props = {
  children: ReactNode
};

export const EventFormContextProvider: React.FC<Props> = ({ children }) => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const closeForm = () => {
    setIsOpenForm(false);
  };

  const contextValues = {
    isOpenForm,
    setIsOpenForm,
    closeForm,
  };

  return (
    <EventFormContext.Provider value={contextValues}>
      { children }
    </EventFormContext.Provider>
  );
};