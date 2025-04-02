import type { Reducer } from 'umi';
import type { ConferenceReportModelState } from './types';
import { defaultState } from './types';

export interface ConferenceReportModelType {
  namespace: 'ConferenceReport';
  state: ConferenceReportModelState;
  reducers: {
    refreshPageState: Reducer<ConferenceReportModelState>;
  };
}

const ConferenceReportModel: ConferenceReportModelType = {
  namespace: 'ConferenceReport',
  state: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
};

export default ConferenceReportModel;
