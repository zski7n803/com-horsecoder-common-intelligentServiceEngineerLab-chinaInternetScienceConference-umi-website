import { onClickOnHotelTransportation } from './onClickOnHotelTransportation';
import React from 'react';
import type { Dispatch } from 'umi';

export type EventsClickOnHotelTransportation = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsClickOnHotelTransportation = (
  dispatch: Dispatch,
): EventsClickOnHotelTransportation => {
  return {
    onClick: (event) => onClickOnHotelTransportation(event, dispatch),
  };
};
