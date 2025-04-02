import type { Reducer } from 'umi';
import type { OrganizeStructureModelState } from './types';
import { defaultState } from './types';

export interface OrganizeStructureModelType {
  namespace: 'OrganizeStructure';
  state: OrganizeStructureModelState;
  reducers: {
    refreshPageState: Reducer<OrganizeStructureModelState>;
  };
}

const OrganizeStructureModel: OrganizeStructureModelType = {
  namespace: 'OrganizeStructure',
  state: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
};

export default OrganizeStructureModel;
