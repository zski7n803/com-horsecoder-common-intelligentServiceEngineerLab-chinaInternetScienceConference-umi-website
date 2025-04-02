
export interface PageState {
}


export interface ConferenceSubmissionModelState {
  page: PageState;
  components: {
  };
}

const defaultPageState: PageState = {
};


export const defaultState: ConferenceSubmissionModelState = {
  page: defaultPageState,
  components: {
  },
};
