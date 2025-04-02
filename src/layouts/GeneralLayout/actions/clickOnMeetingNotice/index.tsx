import { onClickOnMeetingNotice } from './onClickOnMeetingNotice';
import React from 'react';
import type { Dispatch } from 'umi';

export type EventsClickOnMeetingNotice = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsClickOnMeetingNotice = (
  dispatch: Dispatch,
): EventsClickOnMeetingNotice => {
  return {
    onClick: (event) => onClickOnMeetingNotice(event, dispatch),
  };
};
