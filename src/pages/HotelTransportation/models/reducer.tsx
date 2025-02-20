import type { Reducer } from 'umi';
import type { HotelTransportationModelState } from './types';
import { defaultState } from './types';

export interface HotelTransportationModelType {
  namespace: 'HotelTransportation';
  state: HotelTransportationModelState;
  reducers: {
    refreshPageState: Reducer<HotelTransportationModelState>;
  };
}

const HotelTransportationModel: HotelTransportationModelType = {
  namespace: 'HotelTransportation',
  state: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
};

export default HotelTransportationModel;
