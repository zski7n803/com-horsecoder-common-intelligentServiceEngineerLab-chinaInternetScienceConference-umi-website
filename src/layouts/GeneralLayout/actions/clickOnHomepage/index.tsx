import { onClickOnOrganizeStructure } from './onClickOnOrganizeStructure';
import React from 'react';
import type { Dispatch } from 'umi';

export type EventsClickOnHomepage = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsClickOnHomepage = (
  dispatch: Dispatch,
): EventsClickOnHomepage => {
  return {
    onClick: (event) => onClickOnOrganizeStructure(event, dispatch),
  };
};
