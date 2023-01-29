import React, { ReactNode} from 'react';
import{ useSearchParams } from 'react-router-dom';
import { selectedDateContextI } from '../types/selectedDateContextI';

export const selectedDateContext = React.createContext<selectedDateContextI>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saveMonth: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saveYear: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saveDay: () => {},
  year: `${new Date().getFullYear()}`,
  month: `${new Date().getMonth()}`,
  day: `${new Date().getDate()}`,
});

type Props = {
  children: ReactNode
};

export const SelectedDateContextProvider: React.FC<Props> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const saveMonth = (month: Date | number) => {
    if (typeof month === 'number') {
      searchParams.set('month', `${month}`);
    } else  {
      searchParams.set('month', `${month.getMonth()}`);
    }

    setSearchParams(searchParams);
  };

  const saveYear = (year: Date | number) => {
    if (typeof year === 'number') {
      searchParams.set('year', `${year}`);
    } else  {
      searchParams.set('year', `${year.getFullYear()}`);
    }

    setSearchParams(searchParams);
  };

  const saveDay = (date: Date | number) => {
    if (typeof date === 'number') {
      searchParams.set('day', `${date}`);
    } else  {
      searchParams.set('day', `${date.getDate()}`);
    }

    setSearchParams(searchParams);
  };

  const year = searchParams.get('year') || `${new Date().getFullYear()}`;
  const month = searchParams.get('month') || `${new Date().getMonth()}`;
  const day = searchParams.get('day') || `${new Date().getDate()}`;

  const contextValues = {
    saveMonth,
    saveYear,
    saveDay,
    year,
    month,
    day,
  };

  return (
    <selectedDateContext.Provider value={contextValues}>
      { children }
    </selectedDateContext.Provider>
  );
};
