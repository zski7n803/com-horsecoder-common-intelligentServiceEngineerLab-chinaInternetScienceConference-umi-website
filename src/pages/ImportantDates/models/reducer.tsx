import type { Reducer } from 'umi';
import type { ImportantDatesModelState } from './types';
import { defaultState } from './types';

export interface ImportantDatesModelType {
  namespace: 'ImportantDates';
  state: ImportantDatesModelState;
  reducers: {
    refreshPageState: Reducer<ImportantDatesModelState>;
  };
}

const ImportantDatesModel: ImportantDatesModelType = {
  namespace: 'ImportantDates',
  state: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
};

export default ImportantDatesModel;
