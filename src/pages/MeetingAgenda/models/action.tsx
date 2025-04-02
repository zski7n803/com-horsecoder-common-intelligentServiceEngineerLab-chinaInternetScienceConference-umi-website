import type { PageState } from './types';

export const refreshMeetingAgendaPageState = (state: PageState) => ({
  type: 'MeetingAgenda/refreshPageState',
  payload: { ...state },
});
