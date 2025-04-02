import type { Reducer } from 'umi';
import type { MeetingNotificationComponentModelState } from './types';
import { defaultState } from './types';

export interface MeetingNotificationComponentModelType {
  namespace: 'MeetingNotificationComponent';
  state: MeetingNotificationComponentModelState;
  reducers: {
    refreshComponentState: Reducer<MeetingNotificationComponentModelState>;
  };
}

const MeetingNotificationComponentModel: MeetingNotificationComponentModelType = {
  namespace: 'MeetingNotificationComponent',
  state: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
  },
};

export default MeetingNotificationComponentModel;
