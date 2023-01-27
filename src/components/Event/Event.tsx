import React from "react";
import { EventI } from "../../types/Event";

import './Event.scss';

type Props = {
  event: EventI;
};

export const Event: React.FC<Props> = ({ event }) => (
  <div className="event">
    <span className="event__time">{event?.time || '-'}</span>
    <p className="event__title">{event.title}</p>
  </div>
);