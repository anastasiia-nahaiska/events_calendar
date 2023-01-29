export interface selectedDateContextI {
  saveMonth: (month: Date | number) => void;
  saveYear: (year: Date | number) => void;
  saveDay: (date: Date | number) => void;
  year: string;
  month: string;
  day: string;
}