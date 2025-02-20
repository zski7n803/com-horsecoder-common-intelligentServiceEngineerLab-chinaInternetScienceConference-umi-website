import { onClickOnMeetingNotificationJump } from './onClickOnMeetingNotificationJump';
import React from 'react';
import type { Dispatch } from 'umi';

export type EventsMeetingNoticeItem = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsMeetingNoticeItem = (
  dispatch: Dispatch,
  entity: any,
): EventsMeetingNoticeItem => {
  return {
    onClick: (event) => onClickOnMeetingNotificationJump(event, dispatch, entity),
  };
};
