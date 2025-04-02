import { onClickOnImportantDates } from './onClickOnImportantDates';
import React from 'react';
import type { Dispatch } from 'umi';

export type EventsClickOnImportantDates = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsClickOnImportantDates = (
  dispatch: Dispatch,
): EventsClickOnImportantDates => {
  return {
    onClick: (event) => onClickOnImportantDates(event, dispatch),
  };
};
