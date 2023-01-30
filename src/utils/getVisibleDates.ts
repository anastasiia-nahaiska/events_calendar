export const getVisibleDates = (month: number, year: number) => {
  const visibleDaysInPrevMonth = Array
    .from(
      { length: new Date(Date.UTC(year, month, 1)).getUTCDay() },
      (_, i) => new Date(year, month, -i)
    )
    .reverse();
    
  const allDaysInCurrMonth = Array.from(
    { length: new Date(Date.UTC(year, month + 1, 0)).getUTCDate() },
    (_, i) => new Date(year, month, i + 1)
  );
  
  const visibleDaysInNextMonth = Array.from(
    { length: 6 - new Date(Date.UTC(year, month + 1, 0)).getUTCDay() },
    (_, i) => new Date(year, month + 1, i + 1)
  );

  return [
    ...visibleDaysInPrevMonth,
    ...allDaysInCurrMonth,
    ...visibleDaysInNextMonth
  ];
};
