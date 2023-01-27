import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions as selectedDateActions } from "../../features/selectedDate";

import './SetMonth.scss';

export const SetMonth: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedDate = useAppSelector(state => state.selectedDate)
  const setNextMonth = () => dispatch(selectedDateActions.setNextMonth());
  const setPrevMonth = () => dispatch(selectedDateActions.setPrevMonth());

  return (
    <div className="set_month">
      <button className="set_month__button" onClick={setPrevMonth}></button>

      <p className="set_month__curr_month">
        {`${selectedDate.toLocaleString('default', { month: 'long' })} ${selectedDate.getFullYear()}`}
      </p>

      <button className="set_month__button" onClick={setNextMonth}></button>
    </div>
  )
}