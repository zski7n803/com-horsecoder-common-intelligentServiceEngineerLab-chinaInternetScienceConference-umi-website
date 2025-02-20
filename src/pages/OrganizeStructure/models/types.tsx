
export interface PageState {
}


export interface OrganizeStructureModelState {
  page: PageState;
  components: {
  };
}

const defaultPageState: PageState = {
};


export const defaultState: OrganizeStructureModelState = {
  page: defaultPageState,
  components: {
  },
};
