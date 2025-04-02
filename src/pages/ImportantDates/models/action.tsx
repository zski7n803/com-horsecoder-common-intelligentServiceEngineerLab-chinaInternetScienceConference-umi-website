import type { PageState } from './types';

export const refreshImportantDatesPageState = (state: PageState) => ({
  type: 'ImportantDates/refreshPageState',
  payload: { ...state },
});
