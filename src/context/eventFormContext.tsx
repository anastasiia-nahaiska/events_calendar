import React, { ReactNode, useState } from 'react';
import { EventFormContextI } from '../types/EventFormContextI';
import { FormRegime } from '../types/FormRegime';

export const EventFormContext = React.createContext<EventFormContextI>({
  isOpenForm: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsOpenForm: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormRegime: () => {},
  formRegime: FormRegime.CREATE

});

type Props = {
  children: ReactNode
};

export const EventFormContextProvider: React.FC<Props> = ({ children }) => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [formRegime, setFormRegime] = useState<FormRegime>(FormRegime.CREATE);

  const contextValues = {
    isOpenForm,
    setIsOpenForm,
    formRegime,
    setFormRegime
  };

  return (
    <EventFormContext.Provider value={contextValues}>
      { children }
    </EventFormContext.Provider>
  );
};