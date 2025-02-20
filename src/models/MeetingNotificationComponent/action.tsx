import type { ComponentState } from './types';

export const refreshMeetingNotificationComponentComponentState = (state: ComponentState) => ({
  type: 'MeetingNotificationComponent/refreshComponentState',
  payload: { ...state },
});
