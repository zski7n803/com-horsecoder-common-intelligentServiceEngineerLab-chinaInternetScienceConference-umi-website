
export interface PageState {
}


export interface RichTextDisplayModelState {
  page: PageState;
  components: {
  };
}

const defaultPageState: PageState = {
};


export const defaultState: RichTextDisplayModelState = {
  page: defaultPageState,
  components: {
  },
};
