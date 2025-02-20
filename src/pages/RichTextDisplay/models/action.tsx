import type { PageState } from './types';

export const refreshRichTextDisplayPageState = (state: PageState) => ({
  type: 'RichTextDisplay/refreshPageState',
  payload: { ...state },
});
