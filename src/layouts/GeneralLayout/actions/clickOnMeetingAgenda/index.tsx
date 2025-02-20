import { onClickOnMeetingAgenda } from './onClickOnMeetingAgenda';
import React from 'react';
import type { Dispatch } from 'umi';

export type EventsClickOnMeetingAgenda = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsClickOnMeetingAgenda = (
  dispatch: Dispatch,
): EventsClickOnMeetingAgenda => {
  return {
    onClick: (event) => onClickOnMeetingAgenda(event, dispatch),
  };
};
