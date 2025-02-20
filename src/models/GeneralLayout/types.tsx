
export interface LayoutState {
}


export interface GeneralLayoutModelState {
  layout: LayoutState;
  components: {
  };
}

const defaultLayoutState: LayoutState = {
};


export const defaultState: GeneralLayoutModelState = {
  layout: defaultLayoutState,
  components: {
  },
};
