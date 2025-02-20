import type { PageState } from './types';

export const refreshWebsiteHomepagePageState = (state: PageState) => ({
  type: 'WebsiteHomepage/refreshPageState',
  payload: { ...state },
});
