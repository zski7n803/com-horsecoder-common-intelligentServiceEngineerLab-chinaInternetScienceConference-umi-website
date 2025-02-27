import type { Reducer } from 'umi';
import type { ConferenceSubmissionSecondModelState } from './types';
import { defaultState } from './types';

export interface ConferenceSubmissionSecondModelType {
  namespace: 'ConferenceSubmissionSecond';
  state: ConferenceSubmissionSecondModelState;
  reducers: {
    refreshPageState: Reducer<ConferenceSubmissionSecondModelState>;
  };
}

const ConferenceSubmissionSecondModel: ConferenceSubmissionSecondModelType = {
  namespace: 'ConferenceSubmissionSecond',
  state: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
};

export default ConferenceSubmissionSecondModel;
