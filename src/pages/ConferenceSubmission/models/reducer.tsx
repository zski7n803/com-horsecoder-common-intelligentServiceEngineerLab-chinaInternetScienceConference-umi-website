import type { Reducer } from 'umi';
import type { ConferenceSubmissionModelState } from './types';
import { defaultState } from './types';

export interface ConferenceSubmissionModelType {
  namespace: 'ConferenceSubmission';
  state: ConferenceSubmissionModelState;
  reducers: {
    refreshPageState: Reducer<ConferenceSubmissionModelState>;
  };
}

const ConferenceSubmissionModel: ConferenceSubmissionModelType = {
  namespace: 'ConferenceSubmission',
  state: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
};

export default ConferenceSubmissionModel;
