import type { PageState } from './types';

export const refreshMeetingRegistrationPageState = (state: PageState) => ({
  type: 'MeetingRegistration/refreshPageState',
  payload: { ...state },
});
