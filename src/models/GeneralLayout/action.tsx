import type { LayoutState } from './types';

export const refreshGeneralLayoutLayoutState = (state: LayoutState) => ({
  type: 'GeneralLayout/refreshLayoutState',
  payload: { ...state },
});
