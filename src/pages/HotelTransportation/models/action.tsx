import type { PageState } from './types';

export const refreshHotelTransportationPageState = (state: PageState) => ({
  type: 'HotelTransportation/refreshPageState',
  payload: { ...state },
});
