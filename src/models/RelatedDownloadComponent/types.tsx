
export interface ComponentState {
}


export interface RelatedDownloadComponentModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
};


export const defaultState: RelatedDownloadComponentModelState = {
  component: defaultComponentState,
  components: {
  },
};
