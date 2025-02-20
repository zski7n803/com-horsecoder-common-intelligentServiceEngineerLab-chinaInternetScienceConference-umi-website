import type { PageState } from './types';

export const refreshConferenceReportPageState = (state: PageState) => ({
  type: 'ConferenceReport/refreshPageState',
  payload: { ...state },
});
