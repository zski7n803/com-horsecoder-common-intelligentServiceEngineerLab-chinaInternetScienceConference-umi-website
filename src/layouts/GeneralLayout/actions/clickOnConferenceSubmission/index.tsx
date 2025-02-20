import { onClickOnConferenceSubmission } from './onClickOnConferenceSubmission';
import React from 'react';
import type { Dispatch } from 'umi';

export type EventsClickOnConferenceSubmission = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsClickOnConferenceSubmission = (
  dispatch: Dispatch,
): EventsClickOnConferenceSubmission => {
  return {
    onClick: (event) => onClickOnConferenceSubmission(event, dispatch),
  };
};
