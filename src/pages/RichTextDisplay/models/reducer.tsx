import type { Reducer } from 'umi';
import type { RichTextDisplayModelState } from './types';
import { defaultState } from './types';

export interface RichTextDisplayModelType {
  namespace: 'RichTextDisplay';
  state: RichTextDisplayModelState;
  reducers: {
    refreshPageState: Reducer<RichTextDisplayModelState>;
  };
}

const RichTextDisplayModel: RichTextDisplayModelType = {
  namespace: 'RichTextDisplay',
  state: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
};

export default RichTextDisplayModel;
