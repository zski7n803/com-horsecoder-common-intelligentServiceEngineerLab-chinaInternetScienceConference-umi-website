import type { PageState } from './types';

export const refreshConferenceSubmissionPageState = (state: PageState) => ({
  type: 'ConferenceSubmission/refreshPageState',
  payload: { ...state },
});
