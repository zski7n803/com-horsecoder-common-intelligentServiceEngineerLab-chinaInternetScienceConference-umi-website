import type { Reducer } from 'umi';
import type { MeetingAgendaModelState } from './types';
import { defaultState } from './types';

export interface MeetingAgendaModelType {
  namespace: 'MeetingAgenda';
  state: MeetingAgendaModelState;
  reducers: {
    refreshPageState: Reducer<MeetingAgendaModelState>;
  };
}

const MeetingAgendaModel: MeetingAgendaModelType = {
  namespace: 'MeetingAgenda',
  state: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
};

export default MeetingAgendaModel;
