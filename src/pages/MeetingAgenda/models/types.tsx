
export interface PageState {
}


export interface MeetingAgendaModelState {
  page: PageState;
  components: {
  };
}

const defaultPageState: PageState = {
};


export const defaultState: MeetingAgendaModelState = {
  page: defaultPageState,
  components: {
  },
};
