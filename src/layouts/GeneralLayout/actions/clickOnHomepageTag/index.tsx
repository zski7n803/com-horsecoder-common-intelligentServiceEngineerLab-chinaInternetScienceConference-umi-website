import { onClickOnHomepageTag } from './onClickOnHomepageTag';
import React from 'react';
import type { Dispatch } from 'umi';

export type EventsClickOnHomepageTag = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsClickOnHomepageTag = (
  dispatch: Dispatch,
): EventsClickOnHomepageTag => {
  return {
    onClick: (event) => onClickOnHomepageTag(event, dispatch),
  };
};
