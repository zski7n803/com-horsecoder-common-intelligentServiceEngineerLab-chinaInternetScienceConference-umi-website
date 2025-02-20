import { onClickOnConferenceReport } from './onClickOnConferenceReport';
import React from 'react';
import type { Dispatch } from 'umi';

export type EventsClickOnConferenceReport = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsClickOnConferenceReport = (
  dispatch: Dispatch,
): EventsClickOnConferenceReport => {
  return {
    onClick: (event) => onClickOnConferenceReport(event, dispatch),
  };
};
