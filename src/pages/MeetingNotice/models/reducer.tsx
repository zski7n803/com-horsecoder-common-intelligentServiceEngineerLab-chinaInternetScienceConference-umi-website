import type { Reducer } from 'umi';
import type { MeetingNoticeModelState } from './types';
import { defaultState } from './types';

export interface MeetingNoticeModelType {
  namespace: 'MeetingNotice';
  state: MeetingNoticeModelState;
  reducers: {
    refreshPageState: Reducer<MeetingNoticeModelState>;
  };
}

const MeetingNoticeModel: MeetingNoticeModelType = {
  namespace: 'MeetingNotice',
  state: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
};

export default MeetingNoticeModel;
