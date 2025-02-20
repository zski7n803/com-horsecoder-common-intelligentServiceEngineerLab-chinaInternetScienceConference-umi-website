import type { PageState } from './types';

export const refreshOrganizeStructurePageState = (state: PageState) => ({
  type: 'OrganizeStructure/refreshPageState',
  payload: { ...state },
});
