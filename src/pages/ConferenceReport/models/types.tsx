
export interface PageState {
}


export interface ConferenceReportModelState {
  page: PageState;
  components: {
  };
}

const defaultPageState: PageState = {
};


export const defaultState: ConferenceReportModelState = {
  page: defaultPageState,
  components: {
  },
};
