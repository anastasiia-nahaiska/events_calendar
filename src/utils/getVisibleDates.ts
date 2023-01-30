// export const getVisibleDates = (month: number, year: number) => {
//   const allDaysInMonth = Array.from(
//     { length: new Date(year, month, 0).getDate() },
//     (_, i) => new Date(year, month - 1, i + 1)
//   );

//   const firstDayOfMonth = allDaysInMonth[0].getDay();
//   const lastDayOfMonth = allDaysInMonth[allDaysInMonth.length - 1].getDay();
//   const dates = [];
//   const currDate = new Date(allDaysInMonth[0]);

//   for (let i = firstDayOfMonth; i > 0; i--) {
//     const previusDay = new Date(currDate.setDate(currDate.getDate() - 1));
//     dates.unshift(previusDay);
//   }

//   dates.push(...allDaysInMonth)
  
//   for (let i = 1; i < 7 - lastDayOfMonth; i++) {
//     dates.push(new Date(year, month + 1, i));
//   } 

//   return dates;
// }

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
