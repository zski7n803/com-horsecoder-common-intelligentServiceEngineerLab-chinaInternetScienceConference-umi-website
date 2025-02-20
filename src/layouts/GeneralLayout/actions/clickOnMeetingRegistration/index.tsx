import { onClickOnMeetingRegistration } from './onClickOnMeetingRegistration';
import React from 'react';
import type { Dispatch } from 'umi';

export type EventsClickOnMeetingRegistration = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsClickOnMeetingRegistration = (
  dispatch: Dispatch,
): EventsClickOnMeetingRegistration => {
  return {
    onClick: (event) => onClickOnMeetingRegistration(event, dispatch),
  };
};
