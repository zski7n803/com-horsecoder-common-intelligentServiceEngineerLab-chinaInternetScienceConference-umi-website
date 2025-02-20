import type { Actions } from './actions';
import React from 'react';


export type GeneralLayoutWrapperProps =  {
  children: React.ReactNode;
};

export type GeneralLayoutProps = {
  actions: Actions;
  children: React.ReactNode;
};

