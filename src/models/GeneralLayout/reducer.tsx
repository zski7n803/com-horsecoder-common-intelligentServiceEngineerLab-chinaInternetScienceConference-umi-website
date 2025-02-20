import type { Reducer } from 'umi';
import type { GeneralLayoutModelState } from './types';
import { defaultState } from './types';

export interface GeneralLayoutModelType {
  namespace: 'GeneralLayout';
  state: GeneralLayoutModelState;
  reducers: {
    refreshLayoutState: Reducer<GeneralLayoutModelState>;
  };
}

const GeneralLayoutModel: GeneralLayoutModelType = {
  namespace: 'GeneralLayout',
  state: defaultState,
  reducers: {
    refreshLayoutState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.layout = { ...payload };
      return refreshState;
    },
  },
};

export default GeneralLayoutModel;
