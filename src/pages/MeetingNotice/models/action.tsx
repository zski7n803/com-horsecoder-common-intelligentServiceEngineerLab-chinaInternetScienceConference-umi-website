import type { PageState } from './types';

export const refreshMeetingNoticePageState = (state: PageState) => ({
  type: 'MeetingNotice/refreshPageState',
  payload: { ...state },
});
