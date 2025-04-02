import type { Reducer } from 'umi';
import type { MeetingRegistrationModelState } from './types';
import { defaultState } from './types';

export interface MeetingRegistrationModelType {
  namespace: 'MeetingRegistration';
  state: MeetingRegistrationModelState;
  reducers: {
    refreshPageState: Reducer<MeetingRegistrationModelState>;
  };
}

const MeetingRegistrationModel: MeetingRegistrationModelType = {
  namespace: 'MeetingRegistration',
  state: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
};

export default MeetingRegistrationModel;
