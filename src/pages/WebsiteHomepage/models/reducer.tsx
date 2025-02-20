import type { Reducer } from 'umi';
import type { WebsiteHomepageModelState } from './types';
import { defaultState } from './types';

export interface WebsiteHomepageModelType {
  namespace: 'WebsiteHomepage';
  state: WebsiteHomepageModelState;
  reducers: {
    refreshPageState: Reducer<WebsiteHomepageModelState>;
  };
}

const WebsiteHomepageModel: WebsiteHomepageModelType = {
  namespace: 'WebsiteHomepage',
  state: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
};

export default WebsiteHomepageModel;
