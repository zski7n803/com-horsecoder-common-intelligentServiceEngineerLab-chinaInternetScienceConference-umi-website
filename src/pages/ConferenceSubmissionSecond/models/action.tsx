import type { PageState } from './types';

export const refreshConferenceSubmissionSecondPageState = (state: PageState) => ({
  type: 'ConferenceSubmissionSecond/refreshPageState',
  payload: { ...state },
});
