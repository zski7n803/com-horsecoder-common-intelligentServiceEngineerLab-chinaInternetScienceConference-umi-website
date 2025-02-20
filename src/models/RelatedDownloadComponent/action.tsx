import type { ComponentState } from './types';

export const refreshRelatedDownloadComponentComponentState = (state: ComponentState) => ({
  type: 'RelatedDownloadComponent/refreshComponentState',
  payload: { ...state },
});
