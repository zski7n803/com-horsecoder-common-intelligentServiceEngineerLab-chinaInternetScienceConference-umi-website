import type { Reducer } from 'umi';
import type { RelatedDownloadComponentModelState } from './types';
import { defaultState } from './types';

export interface RelatedDownloadComponentModelType {
  namespace: 'RelatedDownloadComponent';
  state: RelatedDownloadComponentModelState;
  reducers: {
    refreshComponentState: Reducer<RelatedDownloadComponentModelState>;
  };
}

const RelatedDownloadComponentModel: RelatedDownloadComponentModelType = {
  namespace: 'RelatedDownloadComponent',
  state: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
  },
};

export default RelatedDownloadComponentModel;
