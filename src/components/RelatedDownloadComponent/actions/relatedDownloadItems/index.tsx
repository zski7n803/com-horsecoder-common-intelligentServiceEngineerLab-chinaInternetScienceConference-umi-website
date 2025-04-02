import { onClickOnRelevantDownloadLinkJump } from './onClickOnRelevantDownloadLinkJump';
import React from 'react';
import type { Dispatch } from 'umi';

export type EventsRelatedDownloadItems = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsRelatedDownloadItems = (
  dispatch: Dispatch,
  entity: any,
): EventsRelatedDownloadItems => {
  return {
    onClick: (event) => onClickOnRelevantDownloadLinkJump(event, dispatch, entity),
  };
};
